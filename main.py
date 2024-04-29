@namespace
class SpriteKind:
    Background = SpriteKind.create()
    Coin = SpriteKind.create()

def on_up_pressed():
    if Monkey.vy == 0:
        Monkey.vy = -100
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.Coin, on_on_overlap)

def on_overlap_tile(sprite2, location):
    game.game_over(False)
    game.set_game_over_effect(False, effects.dissolve)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite3, location2):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        portal
    """),
    on_overlap_tile2)

coin1: Sprite = None
Monkey: Sprite = None
Monkey = sprites.create(assets.image("""
    player
"""), SpriteKind.player)
scene.set_background_image(assets.image("""
    level
"""))
controller.move_sprite(Monkey, 100, 0)
Monkey.ay = 200
scene.camera_follow_sprite(Monkey)
tiles.set_current_tilemap(tilemap("""
    level4
"""))
for value in tiles.get_tiles_by_type(assets.tile("""
    coin
""")):
    coin1 = sprites.create(img("""
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
        """),
        SpriteKind.Coin)
    tiles.place_on_tile(coin1, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))