namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Coin = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Monkey.vy == 0) {
        Monkey.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`portal`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
let coin1: Sprite = null
let Monkey: Sprite = null
Monkey = sprites.create(assets.image`player`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`level`)
controller.moveSprite(Monkey, 100, 0)
Monkey.ay = 200
scene.cameraFollowSprite(Monkey)
tiles.setCurrentTilemap(tilemap`level4`)
for (let value of tiles.getTilesByType(assets.tile`coin`)) {
    coin1 = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Coin)
    tiles.placeOnTile(coin1, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
