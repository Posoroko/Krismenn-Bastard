export const useDisplayedPanel = () => {
    return useState<string>('displayedPanel', () => "icons")
}

export const useSelectedPage = () => {
    return useState<number>('selectedPage', () => 0)
}

export const useMaxPage = () => {
    return useState<number>('maxPage', () => 0)
}

export const useSelectedMediaIcon = () => {
    return useState<string>('selectedMediaIcon', () => "")
}

export const useSelectedFilter = () => {
    return useState<string>('selectedFilter', () => "all")
}

export const useSelectedConsoleBoard = () => {
    return useState<string>('selectedConsoleBoard', () => "dashboard")
}