import React from "react";
import './Player.css'

const Player = () => {
    return (
        <div className="player-container">
            <div class="outer">
                <div class="inner">
                    <div class="card-wrapper">
                        <div class="box-top">
                            <a href="javascript:void(0);" class="back-button"><i class="fa fa-long-arrow-left"></i></a>
                            <a href="javascript:void(0);" class="fav-button"><i class="fa fa-heart"></i></a>
                            <div class="status-box">NOW PLAYING</div>
                        </div>
                        <div class="box-snapshot">
                            <i class="fa fa-soundcloud"></i>
                        </div>
                        <div class="box-control">
                            <div class="progress-bar"><span data-percent="40"></span></div>
                            <a href="javascript:void(0);" class="shuffle-bt"><i class="fa fa-random"></i></a>
                            <a href="javascript:void(0);" class="loop-bt"><i class="fa fa-exchange"></i></a>
                            <span class="current-time">1.30</span>
                            <span class="total-time">3.30</span>
                        </div>
                        <div class="box-player">
                            <h1 class="song-name">ANOMALY
                                <span class="artist-name">Angles & Airwaves</span>
                            </h1>
                            <div class="control">
                                <a href="javascript:void(0);" ><i class="fa fa-backward"></i></a>
                                <a href="javascript:void(0);" class="play-bt"><i class="fa fa-play-circle"></i></a>
                                <a href="javascript:void(0);"><i class="fa fa-forward"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Player;