import './VideCard.scss'

const VideoCard = () =>{
    return(
        <li className='video-card'>
            <div className="video-section">
                    <iframe src="https://www.youtube.com/embed?v=kLM38etRu5g&t=890s" title='youtube' />
            </div>
            <div className="body-section">

            </div>
        </li>
    )
}

export default VideoCard