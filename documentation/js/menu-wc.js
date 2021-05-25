'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">template documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/actualstatusPageModule.html" data-type="entity-link">actualstatusPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-actualstatusPageModule-7218fdac7f930a2d3c921f2e57b962dc"' : 'data-target="#xs-components-links-module-actualstatusPageModule-7218fdac7f930a2d3c921f2e57b962dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-actualstatusPageModule-7218fdac7f930a2d3c921f2e57b962dc"' :
                                            'id="xs-components-links-module-actualstatusPageModule-7218fdac7f930a2d3c921f2e57b962dc"' }>
                                            <li class="link">
                                                <a href="components/ActualstatusPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActualstatusPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActualstatusPageRoutingModule.html" data-type="entity-link">ActualstatusPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-17d8051afb157b6d785ee0f0ab0fa470"' : 'data-target="#xs-components-links-module-AppModule-17d8051afb157b6d785ee0f0ab0fa470"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-17d8051afb157b6d785ee0f0ab0fa470"' :
                                            'id="xs-components-links-module-AppModule-17d8051afb157b6d785ee0f0ab0fa470"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestartDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RestartDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChangeClimaPageModule.html" data-type="entity-link">ChangeClimaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChangeClimaPageModule-dfb7bfd2e15b475dece68228cd1fb1bf"' : 'data-target="#xs-components-links-module-ChangeClimaPageModule-dfb7bfd2e15b475dece68228cd1fb1bf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChangeClimaPageModule-dfb7bfd2e15b475dece68228cd1fb1bf"' :
                                            'id="xs-components-links-module-ChangeClimaPageModule-dfb7bfd2e15b475dece68228cd1fb1bf"' }>
                                            <li class="link">
                                                <a href="components/ChangeClimaPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChangeClimaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChangeClimaPageRoutingModule.html" data-type="entity-link">ChangeClimaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link">ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' : 'data-target="#xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-6099e2634df78101d8aa570c1ca6f723"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpPageModule.html" data-type="entity-link">HelpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HelpPageModule-a26098be8f956e99fcea799da2f70c5a"' : 'data-target="#xs-components-links-module-HelpPageModule-a26098be8f956e99fcea799da2f70c5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HelpPageModule-a26098be8f956e99fcea799da2f70c5a"' :
                                            'id="xs-components-links-module-HelpPageModule-a26098be8f956e99fcea799da2f70c5a"' }>
                                            <li class="link">
                                                <a href="components/HelpPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HelpPageRoutingModule.html" data-type="entity-link">HelpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' : 'data-target="#xs-components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' :
                                            'id="xs-components-links-module-LoginPageModule-7eaa1484e3471e6cee0c029adf093ff3"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link">LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OpeningScreenPageModule.html" data-type="entity-link">OpeningScreenPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OpeningScreenPageModule-a2354ba92360efec42a981f281e1d37c"' : 'data-target="#xs-components-links-module-OpeningScreenPageModule-a2354ba92360efec42a981f281e1d37c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OpeningScreenPageModule-a2354ba92360efec42a981f281e1d37c"' :
                                            'id="xs-components-links-module-OpeningScreenPageModule-a2354ba92360efec42a981f281e1d37c"' }>
                                            <li class="link">
                                                <a href="components/OpeningScreenPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OpeningScreenPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OpeningScreenPageRoutingModule.html" data-type="entity-link">OpeningScreenPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PollPageModule.html" data-type="entity-link">PollPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PollPageModule-5f8ad86424bbd342cd04e914ecc0c077"' : 'data-target="#xs-components-links-module-PollPageModule-5f8ad86424bbd342cd04e914ecc0c077"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PollPageModule-5f8ad86424bbd342cd04e914ecc0c077"' :
                                            'id="xs-components-links-module-PollPageModule-5f8ad86424bbd342cd04e914ecc0c077"' }>
                                            <li class="link">
                                                <a href="components/PollPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PollPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PollPageRoutingModule.html" data-type="entity-link">PollPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageModule.html" data-type="entity-link">ProfilePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfilePageModule-460493f5565596adff1ee069cc868854"' : 'data-target="#xs-components-links-module-ProfilePageModule-460493f5565596adff1ee069cc868854"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfilePageModule-460493f5565596adff1ee069cc868854"' :
                                            'id="xs-components-links-module-ProfilePageModule-460493f5565596adff1ee069cc868854"' }>
                                            <li class="link">
                                                <a href="components/ProfilePage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfilePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfilePageRoutingModule.html" data-type="entity-link">ProfilePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SelectionPageModule.html" data-type="entity-link">SelectionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SelectionPageModule-421cfe23255c76f0279541a9b03b8b98"' : 'data-target="#xs-components-links-module-SelectionPageModule-421cfe23255c76f0279541a9b03b8b98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SelectionPageModule-421cfe23255c76f0279541a9b03b8b98"' :
                                            'id="xs-components-links-module-SelectionPageModule-421cfe23255c76f0279541a9b03b8b98"' }>
                                            <li class="link">
                                                <a href="components/SelectionPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SelectionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SelectionPageRoutingModule.html" data-type="entity-link">SelectionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageModule.html" data-type="entity-link">SignUpPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' : 'data-target="#xs-components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' :
                                            'id="xs-components-links-module-SignUpPageModule-2bd124174f92560f9e057a4a15bb86d3"' }>
                                            <li class="link">
                                                <a href="components/SignUpPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SignUpPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignUpPageRoutingModule.html" data-type="entity-link">SignUpPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/zonastatusPageModule.html" data-type="entity-link">zonastatusPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-zonastatusPageModule-2fa224f6032f180c3c0f2b7830941fdf"' : 'data-target="#xs-components-links-module-zonastatusPageModule-2fa224f6032f180c3c0f2b7830941fdf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-zonastatusPageModule-2fa224f6032f180c3c0f2b7830941fdf"' :
                                            'id="xs-components-links-module-zonastatusPageModule-2fa224f6032f180c3c0f2b7830941fdf"' }>
                                            <li class="link">
                                                <a href="components/zonastatusPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">zonastatusPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/zonastatusPageRoutingModule.html" data-type="entity-link">zonastatusPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChairsService.html" data-type="entity-link">ChairsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ClimateTempService.html" data-type="entity-link">ClimateTempService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link">FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService-1.html" data-type="entity-link">FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService-2.html" data-type="entity-link">FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QualityClimateNewService.html" data-type="entity-link">QualityClimateNewService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QualityClimateOldService.html" data-type="entity-link">QualityClimateOldService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ZoneService.html" data-type="entity-link">ZoneService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/CardData.html" data-type="entity-link">CardData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/rooms.html" data-type="entity-link">rooms</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/temp.html" data-type="entity-link">temp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VoteData.html" data-type="entity-link">VoteData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/zones.html" data-type="entity-link">zones</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});