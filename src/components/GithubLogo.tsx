import React from 'react'

import GithubDarkUrl from '@/assets/github-mark-white.svg?url'
import GithubLightUrl from '@/assets/github-mark.svg?url'


type GithubLogoProps = {
    url: string;
}




export function GithubLogo({url}: GithubLogoProps ) {
  return (
        <a href={url}>
          <img src={GithubLightUrl} alt="GitHub" className="h-6 w-6 block dark:hidden" />
          <img src={GithubDarkUrl} alt="GitHub" className="h-6 w-6 hidden dark:block" />
        </a>
  )
}
