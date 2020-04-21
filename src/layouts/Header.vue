<template>
    <nav class="navbar has-margin-20" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/" class="navbar-item has-margin-left-80" >
            <img  src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </router-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">


        <div class="navbar-end has-margin-right-80">
             <router-link to="/" class="navbar-item is-secondary">
            Home
            </router-link>

            <a class="navbar-item  is-secondary">
                Docs
            </a>
            <router-link class="navbar-item is-secondary" to="/login">
                Log in
            </router-link>
        <div class="navbar-item">
            <div class="buttons">
            
           
            <router-link to="/signup" class="button is-primary">
                <strong>Sign up</strong>
            </router-link>
            </div>
        </div>
        </div>
    </div>
    </nav>
</template>