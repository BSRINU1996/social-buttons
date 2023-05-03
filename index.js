const Button = props => {

    <div className="button-container">
        <button className="like-button">
            Like
        </button>
        <button className="comment-button">
            Comment
        </button>
        <button className="share-button">
            Share
        </button>
    </div>


}

const element = (
    <div className="bg-container">
        <h1 className="main-heading">Social Buttons</h1>
        <div className="button-container">
            <button className="like-button">
                Like
            </button>
            <button className="comment-button">
                Comment
            </button>
            <button className="share-button">
                Share
            </button>
        </div>

    </div>
)

ReactDOM.render(element, document.getElementById('root'))
