import video from '../video/Koprivshtitsa.mp4';

function BackgroundVideo () {  
    return (
        <div className="embed-responsive embed-responsive-16by9">
            <video className="embed-responsive-item video" autoPlay loop muted playsinline>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    );
}
export default BackgroundVideo;