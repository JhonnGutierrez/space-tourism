<script>
    import { onMount } from 'svelte';
    import {fly, blur} from 'svelte/transition'
    import Logo from '$lib/Logo.svelte'
    import HamburgerIcon from '$lib/HamburgerIcon.svelte'
    import CloseIcon from '$lib/CloseIcon.svelte'
    import {currentPage, menuVisible, screenNav} from './currentPage.js'
    
    function toggleMenu() {
        menuVisible.update(m => !m)
    }
    
    let menuAnimationInfo = {
        duration: 150,
        delay: (() => menuVisible ? 0 : 150)(),
        x: 200
    }
    let menuAnimationBlurInfo = {delay:(() => menuVisible ? 150 : 0)(), duration: 300}
    
    onMount(() => {
        if (screen.width > $screenNav) {
            menuVisible.set(true)
            menuAnimationInfo.duration = 0
            menuAnimationInfo.delay = 0
            menuAnimationBlurInfo.duration = 0
            menuAnimationBlurInfo.delay = 0
        }
        console.log($menuVisible)
        
        currentPage.set(window.location.href.split('//')[1].split('/')[1])
    })

    const liIsActive = (page) => {
        return ((page === currentPage) ? 'active' : '')
    }

</script>

<header class='header'>
    <picture class="header__logo">
        <Logo />
    </picture>
    <nav class="header__nav">
        <button on:click={toggleMenu} on:keydown={toggleMenu}
            class="header__nav__button">
            <div  class="header__nav__button__icon">
                {#if $menuVisible}
                    <CloseIcon /> 
                {:else}
                    <HamburgerIcon />
                {/if}
            </div>
        </button>
        <!-- {#key menuVisible} -->
            <div on:click={() => {
                if(screen.width < $screenNav){
                    toggleMenu()
                }
            }} class={`header__nav__menu-container ${$menuVisible && 'active'}`}>
                {#if $menuVisible}
                    <div 
                        transition:fly={menuAnimationInfo} 
                    >
                        <ul class="header__nav__menu" transition:blur={menuAnimationBlurInfo}>
                            <li 
                                class={`header__nav__menu__li ${('' === $currentPage) ? 'active' : ''}`}
                            ><a href="/" class="header__nav__menu__li__a">
                                <span class="header__nav__menu__li__a__span">00</span>
                                HOME</a>
                            </li>
                            <li 
                                class={`header__nav__menu__li ${('destination' === $currentPage) ? 'active' : ''}`}
                            ><a href="/destination" class="header__nav__menu__li__a">
                                <span class="header__nav__menu__li__a__span">01</span>
                                DESTINATION</a>
                            </li>
                            <li 
                                class={`header__nav__menu__li ${('crew' === $currentPage) ? 'active' : ''}`}
                            ><a href="/crew" class="header__nav__menu__li__a">
                                <span class="header__nav__menu__li__a__span">02</span>
                                CREW</a>
                            </li>
                            <li 
                                class={`header__nav__menu__li ${('technology' === $currentPage) ? 'active' : ''}`}
                            ><a href="/technology" class="header__nav__menu__li__a">
                                <span class="header__nav__menu__li__a__span">03</span>
                                TECHNOLOGY</a>
                            </li>
                        </ul>
                    </div>
                {/if}
            </div>
        <!-- {/key} -->
    </nav>
</header>

<style lang="scss">
    
    .header{
        // box-sizing: ;
        position: fixed;
        width: 100%;
        height: 40px;
        padding: 24px ;
        z-index: 1;
        top: 0;
        display: grid;
        align-items: center;
        grid-template-columns: 40px 1fr;

        &__logo{
            
            font-size: 4rem;
        }
        
        &__nav{
            display: flex;
            flex-direction: row-reverse;
            // background-color: $soft-red;

            &__button{
                border: none;
                z-index: 100;
                position: relative;
                display: flex;
                align-items: center;

                &__icon{
                    position: absolute;
                    right: 0;
                    font-size: 2.4rem;
                }
            }

            &__menu{
                position: absolute;
                top: 0;
                right: 0;
                width: 66vw;
                height: 100vh;
                background-color: $white-blur;
                z-index: 10;
                padding-top: 118px;
                padding-left: 32px;
                backdrop-filter: $blur;

                &__li{
                    list-style: none;
                    font-size: 1.6rem;
                    margin-bottom: 32px;
                    letter-spacing: $spacing;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    border-right:4px solid transparent;

                    &:hover{
                        border-right:4px solid $white-alpha;
                    }

                    &.active{
                        border-right:4px solid $white;
                    }
                    

                    &__a{
                        text-decoration: none;
                        color: $white;
                        width: 100%;
                        display:block;
                        padding: 16px;
                        
                        &__span{
                            font-weight: 700;
                            margin-right: 14px;
                        }
                    }
                }

                &-container{
                    position: absolute;
                    top: 0;
                    right: 0;

                    &.active{
                        z-index: 0;
                        width: 100vw;
                        height: 100vh;
                    }
                }
            }

            &__container{
                background-color: $space-blue;
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                height: 100vh;
                overflow: hidden;
                transition: opacity .2s ease-in, visibility 0s ease-in;
                transition-delay: 0, 0;
                
            }
            
        }

        @media (min-width: 597px) {
            display: flex;
            align-items: center;
            height: 96px;
            &__nav{
                height: 96px;
                &__button{
                    display: none;
                    // 768 => 100
                    // 450 =>  x
                }
                
                &__menu{
                    width: 60vw;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    padding: 0;
                    height: 96px;
                    gap: 36px;
                    background-color: $white-blur;

                    &-container.active{
                        background-color: #f00;
                        // display: none;
                        width: 0;
                        height: 0;
                    }

                    &__li{

                        margin: 0;
                        height: 100%;
                        border: none;
                        border-bottom: 4px solid transparent;
                        
                        &:hover{
                            border: none;
                            border-bottom:4px solid $white-alpha;
                        }
                        
                        &.active{
                            border: none;
                            border-bottom:4px solid $white;
                        }
                        &__a{
                            padding: 0;
                            &__span{
                                display: none;
                                height: 0;
                                width: 0;
                            }
                        }
                    }
                }
            }
        }

        @media (min-width: 1024px) {
            margin-top: 20px;
            padding-left: 40px;
            &__nav{
                &__menu{
                    &__li{
                        &__a{
                            &__span{
                                display: inline;
                                height: auto;
                                width: auto;
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>