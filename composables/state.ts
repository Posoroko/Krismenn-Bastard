export const useDisplayedPanel = () => {
    return useState<string>('displayedPanel', () => "icons")
}

export const useSelectedPage = () => {
    return useState<number>('selectedPage', () => 0)
}

export const useMaxPage = () => {
    return useState<number>('maxPage', () => 0)
}

export const useSelectedMedia = () => {
    return useState<string>('selectedMedia', () => "")
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