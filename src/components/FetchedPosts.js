import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import Loader from './Loader';

export default function FetchedPosts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.fetchedPosts)
    const isLoaded = useSelector(state => state.app.isLoading)

    if (isLoaded) {
        return (
            <Loader />
        )
    }

    if (!posts.length) {
        return <button
            className='btn btn-primary'
            onClick={() => dispatch(fetchPosts())}>
            Загрузить
        </button>
    }



    return posts.map(post => <Post post={post} key={post.id} />)
}
