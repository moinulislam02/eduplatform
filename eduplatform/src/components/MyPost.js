import React,{useState} from 'react'
import { Container, FormControl, FormGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEllipsis, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import EditPostModal from './EditPostModal';
import { useSelector } from 'react-redux';

export default function MyPost({post, deletePost}) {
    const [dropDownAction, setdropDownAction] = useState(false)
    const [ismodalopen, setismodalopen] = useState(false)
    const currentUser = useSelector((state)=> state.userInfo.currentUser)
    let postDate = new Date(post.createdAt)

    const detectClose = (data) =>{
        setismodalopen(data)
      }
    const doprdownClose = (data) =>{
        setdropDownAction(data)
      }

    return(
        <>
        <EditPostModal post={post} ismodalopen={ismodalopen} detectClose={detectClose} doprdownClose={doprdownClose} />
        <div className="box post" key={post?.id}>
            <div className="post-header">
                <div className="post-user-image">
                    <img src="./img/avaterboy.jpg" className="w-100" alt=""/>
                </div>
                <div className="post-user-info">
                    <h5>{currentUser?.firstName} {currentUser?.LastName}</h5>
                    {/* <p>Student of BSc in CSE, Eastern University</p> */}
                    <p>{postDate.toDateString()}</p>
                    {/* <span>{postDate.toDateString()}</span> */}
                </div>
                <FontAwesomeIcon icon={faEllipsis} onClick={()=>setdropDownAction(!dropDownAction)} />
                {dropDownAction? (
                    <div className='dropdown-action'>
                        <a onClick={()=>setismodalopen(true)}>Edit</a>
                        <a onClick={()=>deletePost(post.id)} >Delete</a>
                    </div>
                ) : ""}
            </div>
            <div className="post-content">
                <p dangerouslySetInnerHTML={{__html:post.description}}></p>
                <div className="post-images">
                    {post.photo === null? "" : <div className="single-post-img">
                        <img src={`${process.env.REACT_APP_API_URL}/alluploads/${post.photo}`} className="w-100" alt=""/>
                    </div>}
                    {/* <div className="single-post-img">
                        <img src="./img/postimg4.jpeg" alt=""/>
                    </div>
                    <div className="single-post-img">
                        <img src="./img/postimg3.jpeg" alt=""/>
                    </div>
                    <div className="single-post-img">
                        <img src="./img/postimg4.jpeg" alt=""/>
                    </div> */}
                </div>
            </div>
            <div className="post-info">
                <div className="post-info-left">
                    <p>{post.likeCount} Likes</p>
                </div>
                <div className="post-info-right">
                    <p>{post.commentCount} Comments | {post.shareCount} Share</p>
                </div>
            </div>
            <div className="post-action d-flex justify-content-between">
                <div className="single-action">
                    <i className="fa-regular fa-thumbs-up"></i>
                    <span>Like</span>
                </div>
                <div className="single-action">
                    <i className="fa-regular fa-comment-dots"></i>
                    <span>Comment</span>
                </div>
                <div className="single-action">
                    <i className="fa-solid fa-share"></i>
                    <span>Share</span>
                </div>
            </div>
        </div>
        </>
    )
}
