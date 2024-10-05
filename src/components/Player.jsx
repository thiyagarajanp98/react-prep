import React from "react";
import './Player.css'

const Player = () => {
    return (
        <div className="player-container">
            <div className="outer">
                <div className="inner">
                    <div className="card-wrapper">
                        <div className="box-top">
                            <a href="javascript:void(0);" className="back-button"><i className="fa fa-close"></i></a>
                            <a href="javascript:void(0);" className="fav-button"><i className="fa fa-heart"></i></a>
                            <div className="status-box">NOW PLAYING</div>
                        </div>
                        <div className="box-snapshot">
                            <i className="fa fa-soundcloud"></i>
                        </div>
                        <div className="box-control">
                            <div className="progress-bar"><span data-percent="40"></span></div>
                            <a href="javascript:void(0);" className="shuffle-bt"><i className="fa fa-random"></i></a>
                            <a href="javascript:void(0);" className="loop-bt"><i className="fa fa-exchange"></i></a>
                            <span className="current-time">1.30</span>
                            <span className="total-time">3.30</span>
                        </div>
                        <div className="box-player">
                            <h1 className="song-name">ANOMALY
                                <span className="artist-name">Angles & Airwaves</span>
                            </h1>
                            <div className="control">
                                <a href="javascript:void(0);" ><i className="fa fa-backward"></i></a>
                                <a href="javascript:void(0);" className="play-bt"><i className="fa fa-play-circle"></i></a>
                                <a href="javascript:void(0);"><i className="fa fa-forward"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;