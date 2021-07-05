window.__require=function t(e,n,i){function o(r,a){if(!n[r]){if(!e[r]){var c=r.split("/");if(c=c[c.length-1],!e[c]){var u="function"==typeof __require&&__require;if(!a&&u)return u(c,!0);if(s)return s(c,!0);throw new Error("Cannot find module '"+r+"'")}r=c}var l=n[r]={exports:{}};e[r][0].call(l.exports,function(t){return o(e[r][1][t]||t)},l,l.exports,t,e,n,i)}return n[r].exports}for(var s="function"==typeof __require&&__require,r=0;r<i.length;r++)o(i[r]);return o}({Block:[function(t,e){"use strict";cc._RF.push(e,"a44aailSTdItb6lQU2tlllu","Block"),cc.Class({extends:cc.Component,properties:{velocity:cc.v2(2e3,0),move:!0,destroytimer:3,shoudStartDestroy:!1,BlockParticles:{default:null,type:cc.Prefab}},start:function(){this.rigidBody=this.getComponent(cc.RigidBody)},update:function(t){this.move&&(this.rigidBody.linearVelocity=cc.v2(this.velocity.x,this.rigidBody.linearVelocity.y),this.PlatformFront()),1==Global.GameOver&&(this.move=!1,this.rigidBody.linearVelocity=cc.v2(0,0),this.node.destroy()),this.shoudStartDestroy&&(this.destroytimer-=t,this.destroytimer<0&&this.node.destroy())},onBeginContact:function(t,e,n){6==n.tag&&(this.InstantiateBlockParticleEffect(),this.node.destroy())},onEndContact:function(){},onPreSolve:function(){},onPostSolve:function(){},PlatformFront:function(){for(var t=this.node.parent.convertToWorldSpaceAR(this.node.getPosition()),e=this.node.parent.convertToWorldSpaceAR(this.node.getPosition().add(cc.Vec3.RIGHT.mul(40))),n=cc.director.getPhysicsManager().rayCast(t,e,cc.RayCastType.All),i=0;i<n.length;i++){var o=n[i];if(3==o.collider.tag)return this.rigidBody.linearVelocity=cc.v2(0,0),this.move=!1,void(this.shoudStartDestroy=!0);o.point,o.normal,o.fraction}},InstantiateBlockParticleEffect:function(){var t=cc.instantiate(this.BlockParticles);t.parent=this.node.parent,t.setPosition(this.node.getPosition())}}),cc._RF.pop()},{}],Bullet:[function(t,e){"use strict";cc._RF.push(e,"27d1aC3qdhMJ6ictcRO/sad","Bullet"),cc.Class({extends:cc.Component,properties:{BulletTime:2,rigidBody:null,velocity:cc.v2(400,0),ExplodeParticles:{default:null,type:cc.Prefab}},onLoad:function(){this.rigidBody=this.getComponent(cc.RigidBody),this.rigidBody.linearVelocity=this.velocity},start:function(){},update:function(t){cc.isValid(this.node)&&(this.BulletTime-=t,this.BulletTime<=0&&this.node.destroy())},onBeginContact:function(t,e,n){if(3==n.tag){var i=n.node.position,o=cc.instantiate(this.ExplodeParticles);o.parent=n.node.parent,o.setPosition(i),n.node.destroy()}e.node.destroy()}}),cc._RF.pop()},{}],CameraController:[function(t,e){"use strict";cc._RF.push(e,"7fd1dmj8IhJf6r3owKmMTP4","CameraController"),cc.Class({extends:cc.Component,properties:{velocity:cc.v2(20,0),offset:320,Player:{default:null,type:cc.Node}},start:function(){},update:function(){this.node.setPosition(this.Player.getPosition().x+this.offset,this.node.getPosition().y)}}),cc._RF.pop()},{}],Config:[function(t,e){"use strict";cc._RF.push(e,"61b4fMmhM9CyYF6gdmigHJy","Config"),cc._RF.pop()},{}],EagleScript:[function(t,e){"use strict";cc._RF.push(e,"0133eqIXu9N76u+dgcPzpG3","EagleScript"),cc.Class({extends:cc.Component,properties:{},start:function(){},onBeginContact:function(t,e,n){n.tag}}),cc._RF.pop()},{}],GameManager:[function(t,e){"use strict";cc._RF.push(e,"373c6JdeeZAbKWN3ZG9yez4","GameManager");var n=t("MxPlayer"),i=cc.Class({extends:cc.Component,properties:{GamePlaying:!0,GameOver:!1,config:null,defaultConfig:null,UILayer:{default:null,type:cc.Node},ExitUILayer:{default:null,type:cc.Node},Player:{default:null,type:cc.Prefab}},statics:{_instance:null,Gameover:60},onLoad:function(){this.CocosPreInitialization(),i._instance=this},start:function(){this.config=n._instance.OnGameInit(),n._instance.GameStart(),n._instance.MxPlayerGameStartData(),this.defaultConfig=n._instance.GameSettings(),n._instance.ShowStickyAds(this.defaultConfig.stickyBannersEnabled),cc.game.on("screenOff",function(){this.PauseGame()},this),cc.game.on("homePressed",function(){this.PauseGame()},this),cc.game.on("pagePause",function(){this.PauseGame()},this)},update:function(){Global.GameOver?this.ShouldEnableUI(!0):this.ShouldEnableUI(!1)},ShouldEnableUI:function(t){this.UILayer.active=t},CocosPreInitialization:function(){cc.view.enableAutoFullScreen(!1);var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-1960)},PauseGame:function(){Global.GameOver||(Global.GamePause=!0,this.ExitUILayer.active=!0,cc.director.pause())},ResumeGame:function(){cc.director.resume(),Global.GamePause=!1,this.ExitUILayer.active=!1}});cc._RF.pop()},{MxPlayer:"MxPlayer"}],Global:[function(t,e){"use strict";cc._RF.push(e,"8841dwpmJlP14vrG2se+UgQ","Global"),window.Global={GamePlaying:!0,GameOver:!1,GamePause:!1},cc._RF.pop()},{}],LevelBlockMoving:[function(t,e){"use strict";cc._RF.push(e,"3bc2eFEFHxM1Yd+bdPapnrI","LevelBlockMoving"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],Manager:[function(t,e){"use strict";cc._RF.push(e,"a05006CmPBOvJNzPS4WYN9i","Manager");var n=t("MxPlayer"),i=cc.Class({extends:cc.Component,properties:{GamePlaying:!0,GameOver:!1,config:null,defaultConfig:null,UILayer:{default:null,type:cc.Node},ExitUILayer:{default:null,type:cc.Node},Player:{default:null,type:cc.Prefab}},statics:{_instance:null,Gameover:60},onLoad:function(){this.CocosPreInitialization(),i._instance=this},start:function(){this.config=n._instance.OnGameInit(),n._instance.GameStart(),this.defaultConfig=n._instance.GameSettings(),cc.game.on("screenOff",function(){this.PauseGame()},this),cc.game.on("homePressed",function(){this.PauseGame()},this),cc.game.on("pagePause",function(){this.PauseGame()},this)},update:function(){Global.GameOver?this.ShouldEnableUI(!0):this.ShouldEnableUI(!1)},ShouldEnableUI:function(t){this.UILayer.active=t},CocosPreInitialization:function(){cc.view.enableAutoFullScreen(!1);var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-1960)},PauseGame:function(){Global.GameOver||(Global.GamePause=!0,this.ExitUILayer.active=!0,cc.director.pause())},ResumeGame:function(){cc.director.resume(),Global.GamePause=!1,this.ExitUILayer.active=!1}});cc._RF.pop()},{MxPlayer:"MxPlayer"}],MxPlayer:[function(t,e){"use strict";cc._RF.push(e,"297f1mMUoBAqo2m3OTjaYby","MxPlayer");var n=cc.Class({extends:cc.Component,properties:{statictesting:!0},statics:{_instance:null},onLoad:function(){n._instance=this},start:function(){},OnGameInit:function(){try{if("undefined"!=typeof gameManager){var t=gameManager.onGameInit(),e=JSON.parse(t);return e.userId,e.gameId,e.roomId,e.highestScore,e.gameMode,e.isFirstOpen,e}}catch(n){console.log("Error Parsing Config")}},GameSettings:function(){var t={default:null,reviveScore:0,reviveEnabled:!0,reviveLives:1,reviveAdExistsDefault:!0,autoAd:!0,noDieScore:10,stickyBannersEnabled:!0,speed:300};if("undefined"==typeof gameManager)return t;try{var e=gameManager.getGameSettings();return JSON.parse(e)}catch(n){return t}},GameStart:function(){if("undefined"!=typeof gameManager)try{gameManager.onGameStart()}catch(t){gameManager.onError(t.stack.toString())}},ShowStickyAds:function(t){!0===t&&"undefined"!=typeof gameManager&&"function"==typeof gameManager.showStickyAds&&(cc.game.on("adShown",function(){console.log("showing sticky ads")}),cc.game.on("adNotShown",function(){}),gameManager.showStickyAds("bottom"))},MxPlayerGameStartData:function(){if("undefined"!=typeof gameManager)try{var t={gameID:String(cc.sys.localStorage.getItem("gameID")),roomID:String(cc.sys.localStorage.getItem("roomID")),userID:String(cc.sys.localStorage.getItem("userID"))},e=JSON.stringify(t);gameManager.onTrack("gameStart",e)}catch(n){gameManager.onError(n.stack.toString())}}});cc._RF.pop()},{}],ObstacleMovements:[function(t,e){"use strict";cc._RF.push(e,"987f7c5BzFICqSoQfY9wLSY","ObstacleMovements"),cc.Class({extends:cc.Component,properties:{platforms:{default:[],type:cc.Node},startpoints:{default:[],type:cc.Vec2},endpoints:{default:[],type:cc.Vec2},time:1,curt:0,shouldmove:!1,destroytimer:7,shoudStartDestroy:!1},start:function(){this.destroytimer=5},update:function(t){this.shouldmove&&(this.curt+=t*(1/this.time),this.MovePlatforms()),this.shoudStartDestroy&&(this.destroytimer-=t,this.destroytimer<0&&this.node.parent.destroy())},MovePlatforms:function(){this.curt>1&&(this.shouldmove=!1,this.curt=1);for(var t=0;t<this.platforms.length;t++){var e=this.lerp(this.startpoints[t].y,this.endpoints[t].y,this.curt),n=this.lerp(this.startpoints[t].x,this.endpoints[t].x,this.curt);cc.isValid(this.platforms[t])&&(this.platforms[t].setPosition(n,e,0),this.SyncAllChildren(this.platforms[t]))}},SyncAllChildren:function(t){for(var e=0;e<t.children.length;e++){var n=t.children[e].getComponent(cc.RigidBody);null!=n&&n.syncPosition(),this.SyncAllChildren(t.children[e])}},onBeginContact:function(){this.shouldmove=!0,this.shoudStartDestroy=!0},lerp:function(t,e,n){return(1-n)*t+n*e}}),cc._RF.pop()},{}],PerfectAnimation:[function(t,e){"use strict";cc._RF.push(e,"9d793C5zLtKKKfQ1RVnSULF","PerfectAnimation"),cc.Class({extends:cc.Component,properties:{animationtime:1,upwardmovementspeed:2,startPosition:cc.v2(0,0),shouldanimate:!1,timer:0,count:0,audioSource:{type:cc.AudioSource,default:null}},start:function(){this.node.active=!0},update:function(){},StartAnimation:function(){this.audioSource.play()}}),cc._RF.pop()},{}],PhysicsRelated:[function(t,e){"use strict";cc._RF.push(e,"1096edwZuVFBZH6fwFCKatQ","PhysicsRelated"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){var t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,-320)},start:function(){}}),cc._RF.pop()},{}],PlayerController:[function(t,e){"use strict";cc._RF.push(e,"17f36fN7N1DGrTcEatsYANU","PlayerController");var n=t("GameManager"),i=t("encryption_1");cc.Class({extends:cc.Component,properties:{gamePlayTime:0,audioSource:{default:null,type:cc.AudioSource},block:{default:null,type:cc.Prefab},bullet:{default:null,type:cc.Prefab},shootPoint:{default:null,type:cc.Node},shooterAnimationsprite:{default:null,type:cc.Node},perfectnode:{default:null,type:cc.Node},scoreDisplay:{default:null,type:cc.Label},trail:cc.MotionStreak,score:0,canvas:cc.Node,velocity:cc.v2(2e3,0),rigidBody:null,move:!0,shootbullets:!1,firerate:.1,fireTimer:.1,perfect:0,shootBulletsTime:5,bulletsTimer:0,NotAssigned:!1},onLoad:function(){this.score=0},start:function(){this.rigidBody=this.getComponent(cc.RigidBody),cc.game.on("rewardAdsExist",this.onRewardedAdsCheck,this),this.velocity.x=350,console.log("speed from config file "+n._instance.defaultConfig.speed)},update:function(t){if(this.move&&(this.gamePlayTime+=t,this.rigidBody.linearVelocity=cc.v2(this.velocity.x,this.rigidBody.linearVelocity.y),this.GainScore(),this.PlatformFront()),this.shootbullets){if(this.fireTimer-=t,this.bulletsTimer-=t,this.ShootTimerAnimation(),this.bulletsTimer<0)return void(this.shootbullets=!1);this.fireTimer<=0&&(this.fireTimer=this.firerate,this.ShootBullet())}this.UpdateTrailPosition()},UpdateTrailPosition:function(){},onBeginContact:function(t,e,n){5==n.tag?(this.shootbullets||(this.perfect++,this.perfectnode.getComponent("PerfectAnimation").StartAnimation()),4==this.perfect&&(this.bulletsTimer=this.shootBulletsTime,this.perfect=0,this.shootbullets=!0)):6==n.tag&&this.GameOver()},ShootBullet:function(){var t=this.node.getPosition().add(cc.v2(50,0)),e=cc.instantiate(this.bullet);e.parent=this.canvas,e.setPosition(t)},PlatformFront:function(){var t,e=this.node.parent.convertToWorldSpaceAR(this.node.getPosition()),n=this.node.parent.convertToWorldSpaceAR(this.node.getPosition().add(cc.Vec3.RIGHT.mul(52)));null!=cc.director.getPhysicsManager()&&(t=cc.director.getPhysicsManager().rayCast(e,n,cc.RayCastType.All));for(var i=0;i<t.length;i++){var o=t[i],s=o.collider;if(3==s.tag||6==s.tag)return void this.GameOver();o.point,o.normal,o.fraction}},ShootTimerAnimation:function(){var t=this.bulletsTimer/this.shootBulletsTime;t<0&&(t=0),this.shooterAnimationsprite.scaleX=t},GameOver:function(){this.play(),this.shooterAnimationsprite.scaleX=0,window.navigator&&window.navigator.vibrate&&window.navigator.vibrate(450),Global.GameOver=!0,this.rigidBody.linearVelocity=cc.v2(0,0),this.shootbullets=!1,this.move=!1},Restart:function(){Global.GameOver=!1,this.move=!0},GainScore:function(){this.score=Math.round(this.node.getPosition().x/500),this.scoreDisplay.string=this.score},MxplayerCheckForRewardeVideos:function(){if("undefined"!=typeof gameManager&&"function"==typeof gameManager.onCheckRewardedVideoAds)try{gameManager.onCheckRewardedVideoAds("rewardAdsExist")}catch(t){gameManager.onError(t.stack.toString())}},onRewardedAdsCheck:function(t){0===t.status?(console.log("rewarded video ad shown"),this.Restart()):(this.MxPlayerGameOver(),console.log("rewarded video ad not shown"))},MxPlayerGameOver:function(){if(this.MxPlayerGameEndData(),"undefined"!=typeof gameManager){var t={gameID:String(cc.sys.localStorage.getItem("gameID")),roomID:String(cc.sys.localStorage.getItem("roomID")),userID:String(cc.sys.localStorage.getItem("userID")),score:this.score,highScore:n._instance.config.highScore,info:i.getInfo(this.score,Math.round(this.gamePlayTime))};try{var e=JSON.stringify(t);gameManager.onGameOver(e)}catch(o){console.log("no game manager"),gameManager.onError(o.stack.toString())}}},MxPlayerGameEndData:function(){if(console.log("called game end event"),"undefined"!=typeof gameManager)try{var t={gameID:String(cc.sys.localStorage.getItem("gameID")),roomID:String(cc.sys.localStorage.getItem("roomID")),userID:String(cc.sys.localStorage.getItem("userID")),speedFromconfig:n._instance.defaultConfig.speed},e=JSON.stringify(t);gameManager.onTrack("gameExit",e)}catch(i){gameManager.onError(i.stack.toString())}},play:function(){this.audioSource.play()},pause:function(){this.audioSource.pause()}}),cc._RF.pop()},{GameManager:"GameManager",encryption_1:"encryption_1"}],SpawnManager:[function(t,e){"use strict";cc._RF.push(e,"4e371rs8XlDxqwuTf+8H73h","SpawnManager"),cc.Class({extends:cc.Component,properties:{platformsArray:{default:[],type:cc.Node},items:[],obstacles:{default:[],type:cc.Prefab},hard:{default:[],type:cc.Prefab},distance:3,distanceBetweenPrefabs:864,eachSurfaceSize:576,previous:0},start:function(){},update:function(){this.SpawnPlatforms(),this.SpawnObstacles()},SpawnPlatforms:function(){if(this.node.getPosition().x-this.platformsArray[0].getPosition().x>2*this.eachSurfaceSize){var t=this.platformsArray[0];t.setPosition(this.distance*this.eachSurfaceSize,this.node.position.y),this.SyncAllChildren(t),this.platformsArray.shift(),this.platformsArray.push(t),this.distance++}},SyncAllChildren:function(t){for(var e=0;e<t.children.length;e++){var n=t.children[e].getComponent(cc.RigidBody);null!=n&&n.syncPosition(),this.SyncAllChildren(t.children[e])}},SpawnObstacles:function(){var t=this.node.getPosition().x;if(t>this.previous+this.distanceBetweenPrefabs){var e=Math.floor(t/this.distanceBetweenPrefabs),n=Math.round(this.GetRandom(0,11)),i=cc.instantiate(this.obstacles[n]);i.parent=this.node.parent,i.setPosition((e+2)*this.distanceBetweenPrefabs,this.node.position.y),this.SyncAllChildren(i),this.previous+=this.distanceBetweenPrefabs}},SpawnHardObstacles:function(){var t=this.node.getPosition().x;if(t>this.previous+this.distanceBetweenPrefabs){var e=Math.floor(t/this.distanceBetweenPrefabs),n=Math.round(this.GetRandom(0,this.hard.length-1)),i=cc.instantiate(this.hard[n]);i.parent=this.node.parent,i.setPosition((e+2)*this.distanceBetweenPrefabs,this.node.position.y),this.SyncAllChildren(i),this.previous+=this.distanceBetweenPrefabs}},GetRandom:function(t,e){return Math.random()*(e-t)+t}}),cc._RF.pop()},{}],TochHandler:[function(t,e){"use strict";cc._RF.push(e,"c7256ckVABFvpUcTGpeWtHV","TochHandler"),t("GameManager"),cc.Class({extends:cc.Component,properties:{block:{default:null,type:cc.Prefab},canvas:cc.Node,Player:{default:null,type:cc.Node},offset:192,ok:40,audioSource:{default:null,type:cc.AudioSource}},onLoad:function(){this.node.on(cc.Node.EventType.TOUCH_START,function(t){t.getTouches()[0].getLocation(),this.NoPlatformAboveBird()&&0==Global.GameOver&&this.GenerateNewBlock()},this)},start:function(){},update:function(){this.node.setPosition(this.Player.getPosition().x+this.offset,this.node.getPosition().y)},GenerateNewBlock:function(){if(1!=Global.GameOver&&1!=Global.GamePause){var t=this.Player.getPosition().add(cc.v3(0,10,0));this.Player.position=this.Player.position.add(cc.v3(0,this.Player.height/2+10,0));var e=cc.instantiate(this.block);e.parent=this.canvas,e.setPosition(t),this.play()}},NoPlatformAboveBird:function(){for(var t=this.Player.parent.convertToWorldSpaceAR(this.Player.getPosition()),e=this.Player.parent.convertToWorldSpaceAR(this.Player.getPosition().add(cc.Vec3.UP.mul(64))),n=cc.director.getPhysicsManager().rayCast(t,e,cc.RayCastType.All),i=0;i<n.length;i++){var o=n[i];if(3==o.collider.tag)return!1;o.point,o.normal,o.fraction}return!0},play:function(){this.audioSource.play()},pause:function(){this.audioSource.pause()}}),cc._RF.pop()},{GameManager:"GameManager"}],Tweenanimation:[function(t,e){"use strict";cc._RF.push(e,"2c1aa5aP5FDS42U0A6a4Hjx","Tweenanimation"),cc.Class({extends:cc.Component,properties:{},start:function(){}}),cc._RF.pop()},{}],encryption_1:[function(t,e){"use strict";cc._RF.push(e,"6a5c8ttgtVH4JdW3bieYiNo","encryption_1");var n={jkldjs:[],hgsdg:[],outyou:function(t){return t+100},hiosdhfoe:function(t){return t+79156},dsafger:function(t){return 2*t},eryewry:function(t){return t-50},d:function(t){return 4*t},eijwuioewj:function(t){return t+3681},kryr:function(t){return t+2},rqewrqwe:function(t){return t-3},mnkdshfo:function(t){return t-46218},sedryerw:function(t){return 2*t},kuyto:function(t){return t+15},dsgwer:function(t){return t-6},j:function(t){return t-9},iuyi567:function(t){return t-100},ioeks:function(t){return t+91},qoiwhdksh:function(t){return t-7613},wqterwt:function(t){return t+1575},klilot:function(t){return t-325},ewtrey5er:function(t){return t-3481},utertyur:function(t){return t+6848},sdfyery:function(t){return t-45},ikuyiyt:function(t){return t+26},euwhsdn:function(t){return t-81},sdrfyer:function(t){return 3*t},hduy:function(t){return t+5},jghity:function(t){return t-6515},getInfo:function(t,e,n){this.dfdsfds();var i=this.fdsfdsfnb(t),o=this.lkdsjgd();this.dfdsfds();var s=this.fdsfdsfnb(e),r=this.lkdsjgd();return{number_0:1,number_1:i,number_2:s,number_3:this.fdsfdsfnb(n),number_4:o,number_5:r,number_6:this.lkdsjgd()}},yrw6yery:function(t){return t+1231},kghty:function(t){return t-45356},dsgreger:function(t){return t+35648},uertdfh:function(t){return t-3549},hjkdnfds:function(t){return t-985},beryerw:function(t){return t+8481},ijlhfew:function(t){return t+874},gdfsr3t:function(t){return t-9895},greger:function(t){return 2*t},kgigi:function(t){return t+17},khdfkjsdhfk:function(t){return t+28},dfdsfew:function(t){return t+17},dfger:function(t){return t+14},thrthfgh:function(t){return t+8},etygdg:function(t){return t+13},sdfdsgd:function(){var t=this.kgigi(0);return t=this.khdfkjsdhfk(t),t=this.dfdsfew(t),t=this.dfger(t),t=this.thrthfgh(t),this.etygdg(t)},fdsjfhw:function(t,e){var n=e-t,i=Math.random();return t+Math.round(i*n)},ehfjkeshfkds:function(t,e){return 1==e?this.hduy(t):2==e?this.ioeks(t):3==e?this.ijlhfew(t):4==e?this.eijwuioewj(t):5==e?this.hiosdhfoe(t):6==e?this.euwhsdn(t):7==e?this.hjkdnfds(t):8==e?this.qoiwhdksh(t):9==e?this.mnkdshfo(t):void 0},sdhkas:function(){this.jkldjs.push({}),this.jkldjs.push(hduy),this.jkldjs.push(ioeks),this.jkldjs.push(ijlhfew),this.jkldjs.push(eijwuioewj),this.jkldjs.push(hiosdhfoe),this.jkldjs.push(euwhsdn),this.jkldjs.push(hjkdnfds),this.jkldjs.push(qoiwhdksh),this.jkldjs.push(mnkdshfo)},dfdsfds:function(){this.hgsdg=[],this.hgsdg.push("1");for(var t=1;t<10;t++){var e=this.fdsjfhw(1,9);this.hgsdg.push(e+"")}},encryption:function(t){return t},fdsfdsfnb:function(t){for(var e=1;e<10;e++){var n=parseInt(this.hgsdg[e]);t=this.ehfjkeshfkds(t,n)}return t*this.sdfdsgd()},lkdsjgd:function(){for(var t="",e=9;e>0;e--)t+=this.hgsdg[e];return parseInt(t)}};e.exports=n,cc._RF.pop()},{}],forwardmovement:[function(t,e){"use strict";cc._RF.push(e,"8c22cqTbrxAuZNhYdXjBvF/","forwardmovement"),cc.Class({extends:cc.Component,properties:{},start:function(){},update:function(){}}),cc._RF.pop()},{}],"mx-game-emulator":[function(t,e){"use strict";cc._RF.push(e,"04b1eyxAxZGNLkjSfXhKSuV","mx-game-emulator"),cc._RF.pop()},{}],particlestest:[function(t,e){"use strict";cc._RF.push(e,"190a8fDt0lHiZwvpXC67wYU","particlestest"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){},start:function(){}}),cc._RF.pop()},{}]},{},["Block","Bullet","CameraController","Config","EagleScript","GameManager","Global","LevelBlockMoving","Manager","MxPlayer","ObstacleMovements","PerfectAnimation","PhysicsRelated","PlayerController","SpawnManager","TochHandler","Tweenanimation","encryption_1","forwardmovement","mx-game-emulator","particlestest"]);