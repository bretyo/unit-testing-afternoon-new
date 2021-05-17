import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {users, posts, shortText, longText} from './__data__/testData'

test('shortenText will not alter data that is shorter than 100',()=>{
    expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('shortenText will shorten data longer than 100 characters and adds 3 periods', ()=>{
    expect(shortenText(longText)).toHaveLength(103)
    expect(shortenText(longText).slice(100,104)).toBe('...')
})

test('this will check the total words in the posts array', ()=>{
    expect(wordCount(posts)).toBe(233)
})

test('will check to see if the first post returned from running attachuserName has a property "displayName"',()=>{
    expect(attachUserName(users, posts)[0]).toHaveProperty('displayName')
})

test('attachUserName removes posts without matching user',()=>{
    const post = {
        id: 5,
      userId: 3,
      title: 'This is a long post',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
    expect(posts).toContainEqual(post);
    expect(attachUserName(users,posts)).not.toContainEqual(post)
})