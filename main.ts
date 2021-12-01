namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Flower = SpriteKind.create()
    export const Fireball = SpriteKind.create()
    export const button = SpriteKind.create()
}
function level_control () {
    if (Level == 0) {
        scene.setBackgroundImage(assets.image`myImage1`)
        play = sprites.create(img`
            222222222222222222222222
            222222222222222222222222
            222222222222222222222222
            222222222222222222222222
            2ffffff22222222222222222
            2ffffff22222222222222222
            2ff22ff22222222222222222
            2ff22ff2ff222ff222222ff2
            2ffffff2ff222fff2222fff2
            2ffffff2ff2222fff22fff22
            2ff22222ff22222ffffff222
            2ff22222ff222222ffff2222
            2ff22222ff2222222ff22222
            2ff22222ff2222222ff22222
            2ff22222ff2222222ff22222
            2ff22222ff2fffff2ff22222
            2ff22222ff2fffff2ff22222
            2ff22222ff2ff2ff2ff22222
            2ff22222ff2fffff2ff22222
            2ff22222ff2fffff2ff22222
            2ff22222ff2222ff2ff22222
            2ff22222ff2222ff2ff22222
            222222222222222222222222
            222222222222222222222222
            `, SpriteKind.button)
        help = sprites.create(img`
            2222222222222222222222222
            2222222222222222222222222
            2222222222222222222222222
            2222222222222222222222222
            2ff22ff222222222222222222
            2ff22ff222222222222222222
            2ff22ff222222222ff2ffffff
            2ff22ff222222222ff2ffffff
            2ff22ff222222222ff2ff22ff
            2ff22ff222222222ff2ff22ff
            2ffffff222222222ff2ffffff
            2ffffff222222222ff2ffffff
            2ff22ff222222222ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2ff22ff2ff222ff2ff2ff2222
            2ff22ff2ff222ff2ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2ff22ff2ff222222ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2ff22ff2fffffff2ff2ff2222
            2222222222222222222222222
            2222222222222222222222222
            `, SpriteKind.button)
        cursor = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f 5 f . . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . f 5 5 5 5 5 f . . . . . 
            . . . f 5 5 5 5 5 5 5 f . . . . 
            . . f 5 5 5 5 5 5 5 5 5 f . . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
            . . f f f f 5 5 5 f f f f . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . f 5 5 5 f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `, SpriteKind.Player)
        play.setPosition(33, 29)
        help.setPosition(111, 29)
        controller.moveSprite(cursor, 100, 100)
    }
    if (Level == 1) {
        tiles.setTilemap(tilemap`level6`)
        cursor.destroy()
        help.destroy()
        play.destroy()
        mySprite = sprites.create(assets.image`Character1`, SpriteKind.Player)
        mySprite.setStayInScreen(true)
        mySprite.setPosition(44, 89)
        mySprite.ay = 350
        controller.moveSprite(mySprite, 100, 0)
        game.showLongText("Welcome to the game!", DialogLayout.Top)
        game.showLongText("Use WASD to move", DialogLayout.Top)
        game.showLongText("Press the space bar to jump", DialogLayout.Top)
    }
    if (Level == 2) {
    	
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.ay != 0) {
        mySprite.vy = -150
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.button, function (sprite, otherSprite) {
    if (otherSprite == play || controller.A.isPressed()) {
        Level = 1
        level_control()
    }
    if (otherSprite == help || controller.A.isPressed()) {
        Level = 2
        level_control()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy(effects.spray, 100)
    game.reset()
})
let mySprite: Sprite = null
let cursor: Sprite = null
let help: Sprite = null
let play: Sprite = null
let Level = 0
let current_level = 0
scene.setBackgroundColor(9)
level_control()
