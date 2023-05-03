const Button = props => {
    const { className, children: textContent } = props;

    return <button className={className}>{textContent}</button>



}

const element = (
    <div className="bg-container">
        <h1 className="main-heading">Social Buttons</h1>
        <div className="button-container">
            <Button className="like-button" children="Like" />
            <Button className="comment-button" children="Comment" />
            <Button className="share-button" children="Share" />
        </div>



    </div>
)

ReactDOM.render(element, document.getElementById('root'))
