import React, {type ComponentProps} from 'react'

import GithubDarkUrl from '@/assets/github-mark-white.svg?url'
import GithubLightUrl from '@/assets/github-mark.svg?url'
import {Button} from "@/components/ui/button.tsx";


type GithubLogoProps = {
    url: string;
    variant: ComponentProps<typeof Button>["variant"];
}


export function GithubLogo({url, variant="outline"}: GithubLogoProps ) {
    return (
        <Button variant={variant} size={"icon"} asChild>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={GithubLightUrl} alt="GitHub" className="h-6 w-6 block dark:hidden" />
                <img src={GithubDarkUrl} alt="GitHub" className="h-6 w-6 hidden dark:block" />
            </a>
        </Button>

    )
}
