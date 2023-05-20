import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import SideWidgetBar from './SideWidgetBar'
import SideWidhetBar2 from './SideWidhetBar2'
import { useSelector,useDispatch } from 'react-redux';
import { getAllPost } from '../util/apis';

export function Feed() {
  const currentUser = useSelector((state)=>state.userInfo.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    getAllPost(dispatch)
  }, [])
  const posts = useSelector((state)=>state.posts.posts)

  return (
    <Row>
        <SideWidgetBar/>
        <div className="col-lg-6 feed">
            <div className="box feed-welcome">
                <div className="feed-top-img">
                    <img src="../img/online-group-study-4373387-3626456.webp" className="w-100" alt=""/>
                </div>
                <div className="feed-welcome-content">
                    <h4>Hi, {currentUser.firstName}!</h4>
                    <p>Let's learn something new.We can help you to learn efficently. Your response is will bring you up.</p>
                </div>
            </div>
            {posts.map((post)=>{
                let postDate = new Date(post.createdAt)
                return(
                    <div className="box post" key={post._id}>
                        <div className="post-header">
                            <div className="post-user-image">
                                <img src="./img/avaterboy.jpg" className="w-100" alt=""/>
                            </div>
                            <div className="post-user-info">
                                <h5>{post.firstName} {post.LastName}</h5>
                                {/* <p>Student of BSc in CSE, Eastern University</p> */}
                                <p>{postDate.toDateString()}</p>
                                {/* <span>{postDate.toDateString()}</span> */}
                            </div>
                            <i className="fa-solid fa-ellipsis"></i>
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
                )
            })}
        </div>
        <SideWidhetBar2/>
    </Row>
  )
}
