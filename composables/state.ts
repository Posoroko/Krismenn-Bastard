export const useDisplayedPanel = () => {
    return useState<string>('displayedPanel', () => "icons")
}

export const useSelectedPage = () => {
    return useState<number>('selectedPage', () => 0)
}

export const useMaxPage = () => {
    return useState<number>('maxPage', () => 0)
}

export const useisPlaying = () => {
    return useState<boolean>('isPlaying', () => false)
}

export const useSelectedConsoleBoard = () => {
    return useState<string>('selectedConsoleBoard', () => "dashboard")
}
// type MediaItem = {
//     id: string,
//     name: string,
//     type: string,
//     url: string,
//     media: string
// }
type MediaItem = Object;


export const useMediaCollection = () => {
    return useState < Array<MediaItem>>('mediaCollection', () => [])
}
export const useSelectedMedia = () => {
    return useState<MediaItem>('selectedMedia', () => { return { id: "", title: "", type: "", file: "" }})
}

export const useIntroPlaying = () => {
    return useState<boolean>('introPlaying', () => true)
}

export const useIntroSlide = () => {
    return useState<number>('introSlide', () => 1)
}
