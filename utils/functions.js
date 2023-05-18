import { boards} from '@/assets/content/boards.js'

const pickNewPagePattern = (boardCollection) => {
    let random = Math.floor(Math.random() * 3)

    let _boardPattern = boards[boardCollection][random]

    return _boardPattern
}


export const newCollectionOfPages = (boardCollectionName, medias) => {

    let mediaCount = 0
    let moreMedias = true

    let _collectionOfPages = []

    let pageCount = 0
    _collectionOfPages[pageCount] = []

    let pagePattern = pickNewPagePattern(boardCollectionName).board
    let pagePatternCount = 0

    let collectionCompleted = false

    while (!collectionCompleted) {

        if(pagePattern[pagePatternCount] && moreMedias) {
            _collectionOfPages[pageCount].push(medias[mediaCount])

            mediaCount++
        } else {
            _collectionOfPages[pageCount].push({id: null})
        }
        pagePatternCount++

        if(mediaCount == medias.length) {
            moreMedias = false
        }
        if(pagePatternCount == pagePattern.length) {
            if (!moreMedias) {
                collectionCompleted = true
            } else {
                pageCount++
                _collectionOfPages[pageCount] = []
                pagePattern = pickNewPagePattern(boardCollectionName).board
                pagePatternCount = 0
            }
        }
    }

    return _collectionOfPages
}


