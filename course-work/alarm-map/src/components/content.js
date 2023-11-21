import '../style/content.css'
const Content = () => {
    return (
        <div className="info1">
            <div className="types1">
                <div className="type1" id="legend-air">
                    <div className="icon"></div>
                    <p>Повітряна тривога</p>
                </div>

                <div className="type1" id="legend-without" >
                    <div className="icon-none"></div>
                    <p>Немає тривоги</p>
                </div>
        </div>
        </div>
        
    )
}

export default Content;