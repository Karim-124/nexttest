const FeatureTitles = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Show Titles</h1>
            <h1>{props.params.title}</h1>
        </div>
    )
}

export default FeatureTitles;