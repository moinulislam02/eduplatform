import { faFile, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import { addPost, uploadMedia } from '../util/apis';
import { getAllPost } from '../util/apis';

export default function PostModal({ismodalopen, detectClose}) {
  const currentUser = useSelector((state)=>state.userInfo.currentUser)
  const [description, setdescription] = useState("Share your knowledge now...")
  const [photo, setphoto] = useState(null)
  const [status, setstatus] = useState(0)
  const [editorLoaded, setEditorLoaded] = useState(false);
  const dispatch = useDispatch()
  let files;

  const handleSubmit = (e) =>{
    let data = {
        "description": description,
        "photo": photo,
        "likeCount":0,
        "commentCount":0,
        "shareCount":0,
        "status":status,
        "userId":currentUser?.id
    }
    addPost(data, currentUser?.accessToken).then((res)=>{
        detectClose(false)
        getAllPost(dispatch)
        setdescription("Share your knowledge now...")
        setphoto(null)
        setstatus(0)
        files = null;
    })
  }

  const handleUpload = (e) => {
    files = e.target.files[0];
    const data = new FormData();
    setphoto(files.name)
    data.append("file", files);
    uploadMedia(data).then((res)=>{})
  }

  return (
    <div className="post-modal">
          <div className="modal" style={ismodalopen? {display:"block"} : {display:"none"}}>
              <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                      <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">Create a post</h1>
                          <button type="button" className="btn-close" onClick={()=>detectClose(false)}></button>
                      </div>
                      <div className="modal-body">
                          <div className="post-header align-items-center">
                              <div className="post-user-image">
                                  {currentUser?.gender === 'male'? <img src="./img/avaterboy.jpg" className="w-100" alt=""/> : <img src="./img/avatergirl.jpg" className="w-100" alt=""/>}
                              </div>
                              <div className="post-user-info">
                                  <h5>{currentUser?.firstName} {currentUser?.LastName}</h5>
                                  <p>Student of BSc in CSE, Eastern University</p>
                              </div>
                          </div>
                          <div  className="post-content">
                            <CKEditor
                                    editor={ ClassicEditor }
                                    tabIndex="18"
                                    data={description}
                                    onReady={ editor => {
                                        // console.log( 'Editor is ready to use!', editor );
                                    } }
                                    onChange={ ( event, editor ) => {
                                        const data = editor.getData();
                                        setdescription(data)
                                    } }
                                />
                          </div>
                      </div>
                      <div className="modal-footer">
                        <div className="post-files">
                              <div className="form-group">
                                  <FontAwesomeIcon icon={faImages}/>
                                  <input type="file" name="photo" onChange={handleUpload}/>
                              </div>
                              <div className="form-group">
                                  <FontAwesomeIcon icon={faFile} />
                                  <input type="file" name="file" id=""/>
                              </div>
                        </div>
                        <div className="d-flex align-items-center">
                              <select name="status" id="" className="form-control" onChange={(e)=>setstatus(e.target.value)}>
                                  <option value="">Status</option>
                                  <option value="0">Active</option>
                                  <option value="1">Draft</option>
                              </select>
                              <button type="button" className="btn theme-btn" onClick={handleSubmit}>Post</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
