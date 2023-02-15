

import '../Styles/Docking3ing.css'

const Docking3ing = () => {


    return (
        <div style={{ 
            display:'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflowX: 'scroll',
            padding: '20px',
            }}>
            <div className="main">
                <div className="cam-group">
                    <div className="cam"></div>
                    <div className="cam"></div>
                    <div className="cam"></div>
                    <div className="cam"></div>
                    <div className="cam"></div>
                    <div className="cam"></div>
                </div>
                <div className="chat">

                </div>
            </div>
            <div className="side">
                <div className="game">

                </div>
                <div className="btn-group-d3">

                </div>
            </div>
        </div>
    )
}

export default Docking3ing