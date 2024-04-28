namespace SpriteKind {
    export const Background = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Monkey.vy = -100
})
let Monkey: Sprite = null
Monkey = sprites.create(assets.image`player`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`level`)
controller.moveSprite(Monkey, 100, 0)
Monkey.ay = 200
scene.cameraFollowSprite(Monkey)
tiles.setCurrentTilemap(tilemap`level4`)
