import React, { useState, useEffect } from 'react';
import { Tooltip } from 'antd';
import { LikeOutlined, LikeFilled, DislikeOutlined, DislikeFilled } from '@ant-design/icons';
import axios from 'axios';

const LikeDisLike = ({videoId}) => {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [likeAction, setLikeAction] = useState(null);

    const variable = {};

    useEffect(() => {
        axios.post(`/api/likeDislike/${videoId}`, variable)
            .then(response => {
                if (response.data.success) {
                    setLikeCount(response.data.likes);
                    setDislikeCount(response.data.dislikes);
                    setLikeAction(response.data.userLikeAction);
                } else {
                    alert('Failed to get like/dislike info');
                }
            });
    }, []);

    const onLike = () => {
        // Logic for like button click
        if (likeAction === 'liked') {
            setLikeAction(null);
            setLikeCount(likeCount - 1);
        } else {
            setLikeAction('liked');
            setLikeCount(likeCount + 1);
            if (likeAction === 'disliked') {
                setDislikeCount(dislikeCount - 1);
            }
        }
    };

    const onDislike = () => {
        // Logic for dislike button click
        if (likeAction === 'disliked') {
            setLikeAction(null);
            setDislikeCount(dislikeCount - 1);
        } else {
            setLikeAction('disliked');
            setDislikeCount(dislikeCount + 1);
            if (likeAction === 'liked') {
                setLikeCount(likeCount - 1);
            }
        }
    };

    return (
        <div>
            <span key="like">
                <Tooltip title="Like">
                    {likeAction === 'liked' ? 
                        <LikeFilled onClick={onLike} /> : 
                        <LikeOutlined onClick={onLike} />
                    }
                </Tooltip>
                <span style={{ paddingLeft: "8px", cursor: "auto" }}>
                    {likeCount}
                </span>
            </span>&nbsp;&nbsp;
            <span key="dislike">
                <Tooltip title="Dislike">
                    {likeAction === 'disliked' ? 
                        <DislikeFilled onClick={onDislike} /> : 
                        <DislikeOutlined onClick={onDislike} />
                    }
                </Tooltip>
                <span style={{ paddingLeft: "8px", cursor: "auto" }}>
                    {dislikeCount}
                </span>
            </span>&nbsp;&nbsp;
        </div>
    );
}

export default LikeDisLike;
