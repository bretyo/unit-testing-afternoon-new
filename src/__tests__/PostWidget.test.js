import React from 'react'
import {act, render} from '@testing-library/react'
import PostWidget from '../components/PostWidget'
import{MemoryRouter} from 'react-router-dom'
import {shortenText} from '../utils/functions'
import {posts} from './__data__/testData'

const longPost = posts[0];
const post = posts[1];
it('renders PostWidget',  ()=>{
    let component = null;

    const {container} = render(<MemoryRouter>
        <PostWidget {...post} />
    </MemoryRouter>)

    component = container
  

    expect(component.textContent).toContain(post.text)
})

it('checks if rendered postWidget has shortened text',  ()=>{
    let component = null;

    const {container} = render(<MemoryRouter>
        <PostWidget {...longPost} />
    </MemoryRouter>)

    component = container
  

    expect(component.textContent).toContain(shortenText(longPost.text))
})

it('checks if rendered postWidget has shortened text',  ()=>{
    let component = null;

    const {container} = render(<MemoryRouter>
        <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>)

    component = container
  

    expect(component.textContent).toContain(longPost.text)
})