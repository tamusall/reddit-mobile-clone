export default function Home() {
  // todo bind values
  const posts = [
    {
      subredditImage: 'https://b.thumbs.redditmedia.com/VVkOXcU0fpAFfkCbxQVcyq7821UVUbQjQdBzT_sNodM.png',
      subreddit: 'DnD',
      createdAgo: '10h',
      title: '[OC] Happy Holidays - Dice Dagger Giveaway! (mod approved)',
      postImage: 'https://i.imgur.com/yCaBTbE.jpg',
      createdBy: null,
      upvotes: 31500,
      stickers: [
        {
          type: 'superheart',
          imageUrl: 'https://www.redditstatic.com/gold/awards/icon/Superheart_64.png'
        },
      ],
      commentCount: 134000,
    },
    {
      subredditImage: 'https://b.thumbs.redditmedia.com/VVkOXcU0fpAFfkCbxQVcyq7821UVUbQjQdBzT_sNodM.png',
      subreddit: 'DnD',
      createdAgo: '10h',
      title: '[OC] Happy Holidays - Dice Dagger Giveaway! (mod approved)',
      postImage: 'https://i.imgur.com/yCaBTbE.jpg',
      createdBy: null,
      upvotes: 31500,
      stickers: [
        {
          type: 'superheart',
          imageUrl: 'https://www.redditstatic.com/gold/awards/icon/Superheart_64.png'
        },
      ],
      commentCount: 134000,
    },
    {
      subredditImage: 'https://b.thumbs.redditmedia.com/VVkOXcU0fpAFfkCbxQVcyq7821UVUbQjQdBzT_sNodM.png',
      subreddit: 'DnD',
      createdAgo: '10h',
      title: '[OC] Happy Holidays - Dice Dagger Giveaway! (mod approved)',
      postImage: 'https://i.imgur.com/yCaBTbE.jpg',
      createdBy: null,
      upvotes: 31500,
      stickers: [
        {
          type: 'superheart',
          imageUrl: 'https://www.redditstatic.com/gold/awards/icon/Superheart_64.png'
        },
      ],
      commentCount: 134000,
    },
    {
      subredditImage: 'https://b.thumbs.redditmedia.com/VVkOXcU0fpAFfkCbxQVcyq7821UVUbQjQdBzT_sNodM.png',
      subreddit: 'DnD',
      createdAgo: '10h',
      title: '[OC] Happy Holidays - Dice Dagger Giveaway! (mod approved)',
      postImage: 'https://i.imgur.com/yCaBTbE.jpg',
      createdBy: null,
      upvotes: 31500,
      stickers: [
        {
          type: 'superheart',
          imageUrl: 'https://www.redditstatic.com/gold/awards/icon/Superheart_64.png'
        },
      ],
      commentCount: 134000,
    },
    {
      subredditImage: 'https://b.thumbs.redditmedia.com/VVkOXcU0fpAFfkCbxQVcyq7821UVUbQjQdBzT_sNodM.png',
      subreddit: 'DnD',
      createdAgo: '10h',
      title: '[OC] Happy Holidays - Dice Dagger Giveaway! (mod approved)',
      postImage: 'https://i.imgur.com/yCaBTbE.jpg',
      createdBy: null,
      upvotes: 31500,
      stickers: [
        {
          type: 'superheart',
          imageUrl: 'https://www.redditstatic.com/gold/awards/icon/Superheart_64.png'
        },
      ],
      commentCount: 134000,
    },
  ];

  return (
    <>
      <header className="shadow-md">
        <div className="flex justify-between px-4 py-2 bg-darkDarkBlue">
          <div className="flex gap-1 items-center">
            <svg className="h-10 w-8" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20"><defs><linearGradient id="orangeredGradient" gradientTransform="rotate(90)"><stop offset="0%" stop-color="#FE7B0E"></stop><stop offset="100%" stop-color="#EF0A22"></stop></linearGradient></defs><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>
            <svg className="h-10 w-14 fill-current font-bold text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55px" height="18px" viewBox="0 0 55 18"><g><circle fill="#ff4500" cx="45.77" cy="3.33" r="2.05"></circle><path d="M16.73,12.05a1.44,1.44,0,0,0,1.54-1.48,4.91,4.91,0,0,0-.1-0.83,5.66,5.66,0,0,0-5.34-4.61c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a5.47,5.47,0,0,0,4.26-1.78,1.19,1.19,0,0,0-.19-1.77,1.25,1.25,0,0,0-1.53.16,3.78,3.78,0,0,1-2.54,1.09,3.42,3.42,0,0,1-3.14-3.08h7ZM12.82,7.44a3.3,3.3,0,0,1,3,2.56h-6A3.3,3.3,0,0,1,12.82,7.44Z"></path><path d="M7.44,6.32a1.15,1.15,0,0,0-1-1.14A4.46,4.46,0,0,0,2.31,6.69V6.54A1.15,1.15,0,1,0,0,6.54V16a1.18,1.18,0,0,0,1.08,1.2A1.15,1.15,0,0,0,2.31,16V11.15A3.51,3.51,0,0,1,6.15,7.47H6.38A1.15,1.15,0,0,0,7.44,6.32Z"></path><path d="M46.92,7.56a1.15,1.15,0,0,0-2.31,0V16a1.15,1.15,0,1,0,2.31,0V7.56Z"></path><path d="M29.87,1.15A1.15,1.15,0,0,0,28.72,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,29.87,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S26.39,15.13,24.62,15.13Z"></path><path d="M41.92,1.15A1.15,1.15,0,0,0,40.77,0h0a1.15,1.15,0,0,0-1.15,1.15V6.31a4,4,0,0,0-2.95-1.18c-3,0-5.51,2.76-5.51,6.15s2.47,6.15,5.51,6.15a4.08,4.08,0,0,0,3-1.19A1.15,1.15,0,0,0,41.92,16V1.15Zm-5.26,14c-1.77,0-3.21-1.72-3.21-3.85s1.43-3.85,3.21-3.85,3.21,1.72,3.21,3.85S38.44,15.13,36.67,15.13Z"></path><path d="M52.91,16V7.44h1a1,1,0,0,0,1.06-1,1,1,0,0,0-1-1.09H52.91V3.76a1.18,1.18,0,0,0-1.08-1.19,1.15,1.15,0,0,0-1.23,1.15V5.38h-1a1,1,0,0,0-1.06,1,1,1,0,0,0,1,1.09h1V16a1.15,1.15,0,0,0,1.15,1.15h0A1.15,1.15,0,0,0,52.91,16Z"></path></g></svg>
          </div>
          <div className="inline-flex gap-3 items-center">
            <button className="px-3 py-0 bg-orange h-7 rounded-full font-bold text-xs text-white">Use App</button>
            <div>
              <svg class="h-5 w-5 fill-current text-white" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg"><g fill="inherit"><path d="m19.1961 8.6h-18.08612c-.401914 0-.803828-.3-.803828-.8s.401914-.8.803828-.8h18.08612c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path><path d="m16.1818 1.6h-12.05742c-.40191 0-.80382-.4-.80382-.8s.40191-.8.80382-.8h12.05742c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path><path d="m16.1818 15.6h-12.05742c-.40191 0-.80382-.3-.80382-.8s.30143-.8.80382-.8h12.05742c.4019 0 .8038.3.8038.8s-.4019.8-.8038.8z"></path></g></svg>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="py-4 px-3 border-b-4 ">
          <h1 className="font-bold text-2xl text-gray-900 stroke-2">Popular</h1>
          <div className="px-1 mt-3 flex items-center gap-2">
            <div>
              <svg className="h-4 w-4 stroke-current text-gray-400 font-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <div>
              <button>
                <span className="flex items-center gap-2">
                  <div className="text-gray-400 font-light">
                    Hot
                  </div>
                  <svg className="h-4 w-4 stroke-current text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col">
          {
            posts.map((post) => {
              return (
                <div className="px-4 py-2 border-b-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <img className="h-6 w-6" src={post.subredditImage}></img>
                      <span>r/{post.subreddit}</span>
                      <a className="text-blue-500" href="#">Join</a>
                      <span>• 10h</span>
                    </div>
                    <div>
                      <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span>{post.title}</span>
                    <img src={post.postImage}></img>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2 p-1 border rounded-full">
                        <button>
                          <svg className="h-4 w-4 stroke-current text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        </button>
                        <span className="text-gray-400 text-xs font-semibold">{post.upvotes}</span>
                        <button>
                          <svg className="h-4 w-4 stroke-current text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-1 p-2 border rounded-full">
                        {
                          post.stickers.map((sticker) => {
                            return (
                              <div>
                                <img className="w-4 h-4" src={sticker.imageUrl}></img>
                              </div>
                            )
                          })
                        }
                        <span className="text-gray-400 text-xs font-semibold">{post.stickers.length}</span>
                      </div>
                      <div className="flex items-center gap-1 p-2 border rounded-full">
                        <div>
                          <svg className="w-4 h-4 stroke-current text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <span className="text-gray-400 text-xs font-semibold">{post.commentCount}</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 p-2 border rounded-full">
                        <div>
                          <svg className="x-4 h-4 stroke-current text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}
