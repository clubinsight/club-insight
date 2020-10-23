<template>
  <b-navbar toggleable="sm" type="light" class="py-0">
    <div class="container">
      <b-navbar-brand to="/">Club Insight</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/settings"
            ><b-icon :icon="$icons.settings" /> Settings</b-nav-item
          >
          <b-nav-item to="/help"
            ><b-icon :icon="$icons.help" /> Help</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
