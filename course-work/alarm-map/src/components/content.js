import '../style/content.css'
const Content = () => {
    return (
        <div className="info">
            <div className="types">
                <div className="type" id="legend-air">
                    <div className="icon"></div>
                    <p>Повітряна тривога</p>
                </div>

                <div className="type" id="legend-without" >
                    <div className="icon-none"></div>
                    <p>Немає тривоги</p>
                </div>
        </div>
        </div>
        
    )
}

export default Content;