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