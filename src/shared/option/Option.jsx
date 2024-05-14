import "./option.css"

export const Option = ({ description, img }) => {
    return (
        <div className="option">
            <div className="title">
                <span>{description}</span>
                <img src={img} alt="" />
            </div>
            {img === './arrowDown.png' ? (
                <div className="photos">
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                alt=""
                            />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                alt=""
                            />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                alt=""
                            />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                    <div className="photoItem">
                        <div className="photoDetail">
                            <img
                                src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                                alt=""
                            />
                            <span>photo_2024_2.png</span>
                        </div>
                        <img src="./download.png" alt="" className="icon" />
                    </div>
                </div>
            ) :
                <>
                </>
            }
        </div>
    )
}