<template>
  <div class="bedroom">
    <Back/>
    <div class="bedroom__name">
      <h2>Bedroom</h2>
      <img
        class="room__icon"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIC02NCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im00ODAgNDh2MTQ0aC00NDh2LTE0NGMwLTI2LjM5ODQzOCAyMS42MDE1NjItNDggNDgtNDhoMzUyYzI2LjM5ODQzOCAwIDQ4IDIxLjYwMTU2MiA0OCA0OHptMCAwIiBmaWxsPSIjZWNjZTkzIi8+PHBhdGggZD0ibTM2OCA2NGgtNDhjLTI2LjI1NzgxMiAwLTQ5LjQwNjI1IDEyLjg5NDUzMS02NCAzMi40OTYwOTQtMTQuNTkzNzUtMTkuNjAxNTYzLTM3Ljc0MjE4OC0zMi40OTYwOTQtNjQtMzIuNDk2MDk0aC00OGMtNDQuMTEzMjgxIDAtODAgMzUuODg2NzE5LTgwIDgwdjgwaDM4NHYtODBjMC00NC4xMTMyODEtMzUuODg2NzE5LTgwLTgwLTgwem0wIDAiIGZpbGw9IiNlNWJkNzYiLz48cGF0aCBkPSJtMjQwIDE5MmgtMTQ0di00OGMwLTI2LjQ2NDg0NCAyMS41MzUxNTYtNDggNDgtNDhoNDhjMjYuNDY0ODQ0IDAgNDggMjEuNTM1MTU2IDQ4IDQ4em0wIDAiIGZpbGw9IiNlNGVkZmIiLz48cGF0aCBkPSJtNDgwIDEyOS42MDE1NjJ2NjIuMzk4NDM4aC00NDh2LTYyLjM5ODQzOGM1LjEyMTA5NC0xLjEyMTA5MyAxMC41NTg1OTQtMS42MDE1NjIgMTYtMS42MDE1NjJoNDE2YzUuNDQxNDA2IDAgMTAuODc4OTA2LjQ4MDQ2OSAxNiAxLjYwMTU2MnptMCAwIiBmaWxsPSIjZTViZDc2Ii8+PHBhdGggZD0ibTQxNiAxOTJoLTE0NHYtNDhjMC0yNi40NjQ4NDQgMjEuNTM1MTU2LTQ4IDQ4LTQ4aDQ4YzI2LjQ2NDg0NCAwIDQ4IDIxLjUzNTE1NiA0OCA0OHptMCAwIiBmaWxsPSIjZTRlZGZiIi8+PHBhdGggZD0ibTIzNy4wNTQ2ODggMTI4aC0xMzguMTA5Mzc2Yy0xLjc5Mjk2OCA1LjAyMzQzOC0yLjk0NTMxMiAxMC4zNjcxODgtMi45NDUzMTIgMTZ2NDhoMTQ0di00OGMwLTUuNjMyODEyLTEuMTUyMzQ0LTEwLjk3NjU2Mi0yLjk0NTMxMi0xNnptMCAwIiBmaWxsPSIjZDdlMWYyIi8+PHBhdGggZD0ibTQxMy4wNTQ2ODggMTI4aC0xMzguMDkzNzVjLTEuODA4NTk0IDUuMDIzNDM4LTIuOTYwOTM4IDEwLjM2NzE4OC0yLjk2MDkzOCAxNnY0OGgxNDR2LTQ4YzAtNS42MzI4MTItMS4xNTIzNDQtMTAuOTc2NTYyLTIuOTQ1MzEyLTE2em0wIDAiIGZpbGw9IiNkN2UxZjIiLz48cGF0aCBkPSJtMTQ0IDE5MmgzMnYzMmgtMzJ6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0zMzYgMTkyaDMydjMyaC0zMnptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTQ2NCAxNjBoLTQxNmMtMjYuNDY0ODQ0IDAtNDggMjEuNTM1MTU2LTQ4IDQ4djk2aDUxMnYtOTZjMC0yNi40NjQ4NDQtMjEuNTM1MTU2LTQ4LTQ4LTQ4em0wIDAiIGZpbGw9IiNmZjY2OGIiLz48cGF0aCBkPSJtMCAyNDBoNTEydjY0aC01MTJ6bTAgMCIgZmlsbD0iI2Y3NDg3YSIvPjxwYXRoIGQ9Im0wIDI3MnYxMTJoMzJ2LTMyaDQ0OHYzMmgzMnYtMTEyem0wIDAiIGZpbGw9IiNlY2NlOTMiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMjA4IDMyaDMydjMyaC0zMnptMCAwIi8+PHBhdGggZD0ibTI3MiAzMmgzMnYzMmgtMzJ6bTAgMCIvPjwvZz48L3N2Zz4K">
    </div>
    <div class="rooms">
      <router-link
        to="/lighting"
        class="room">
        <img
          class="room__icon"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItMTQxIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtOTguODk0NTMxIDIwOGgzMnYyODhoLTMyem0wIDAiIGZpbGw9IiNiMGI0YjkiLz48cGF0aCBkPSJtOTguODk0NTMxIDIwOGgzMnY0OGgtMzJ6bTAgMCIgZmlsbD0iIzlkYTJhNSIvPjxwYXRoIGQ9Im01MC44OTQ1MzEgNDgwaDEyOHYzMmgtMTI4em0wIDAiIGZpbGw9IiM3Nzk1OWUiLz48cGF0aCBkPSJtMjI5Ljc5Mjk2OSAyMjRoLTIyOS43OTI5NjlsMzcuMzQzNzUtMjI0aDE1NS4xMDU0Njl6bTAgMCIgZmlsbD0iIzQ4YzhlZiIvPjxnIGZpbGw9IiNmZmYiPjxwYXRoIGQ9Im05OC44OTQ1MzEgMTI4aDMydjMyaC0zMnptMCAwIi8+PHBhdGggZD0ibTk4Ljg5NDUzMSA2NGgzMnYzMmgtMzJ6bTAgMCIvPjwvZz48L3N2Zz4K" >
        <h3 class="room__title">Lighting</h3>
        <p class="room__description">4 devices</p>
      </router-link>

      <div class="room">
        <img
          class="room__icon"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMzIgMTZoNDQ4djQ4MGgtNDQ4em0wIDAiIGZpbGw9IiNlY2NlOTMiLz48cGF0aCBkPSJtMzIgMTZoNDQ4djQ4aC00NDh6bTAgMCIgZmlsbD0iI2U1YmQ3NiIvPjxnIGZpbGw9IiNjNTk5NjkiPjxwYXRoIGQ9Im0zMiAxMTJoMTEydjk2aC0xMTJ6bTAgMCIvPjxwYXRoIGQ9Im0yNTYgMTEyaDExMnYtOTZoLTIyNHY5NnptMCAwIi8+PHBhdGggZD0ibTM2OCAxMTJoMTEydjk2aC0xMTJ6bTAgMCIvPjxwYXRoIGQ9Im0zMiAzMDRoMTEydjk2aC0xMTJ6bTAgMCIvPjxwYXRoIGQ9Im0zNjggMzA0aDExMnY5NmgtMTEyem0wIDAiLz48cGF0aCBkPSJtMjU2IDMwNGgxMTJ2LTk2aC0yMjR2OTZ6bTAgMCIvPjwvZz48cGF0aCBkPSJtMzg0IDUxMmgtMjU2di0xOTJjMC03MC41NzQyMTkgNTcuNDI1NzgxLTEyOCAxMjgtMTI4czEyOCA1Ny40MjU3ODEgMTI4IDEyOHptMCAwIiBmaWxsPSIjNTc1NjVjIi8+PHBhdGggZD0ibTI1NiAxOTJjLTcwLjU3NDIxOSAwLTEyOCA1Ny40MjU3ODEtMTI4IDEyOHY2NGMwLTcwLjU3NDIxOSA1Ny40MjU3ODEtMTI4IDEyOC0xMjhzMTI4IDU3LjQyNTc4MSAxMjggMTI4di02NGMwLTcwLjU3NDIxOS01Ny40MjU3ODEtMTI4LTEyOC0xMjh6bTAgMCIgZmlsbD0iIzJkMmQzMCIvPjxwYXRoIGQ9Im0yNDAgMjU2aDMydjMyaC0zMnptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTI3MiAzMjBoMzJ2MzJoLTMyem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMjcyIDQxNmgzMnY5NmgtMzJ6bTAgMCIgZmlsbD0iI2U3NmU1NCIvPjxwYXRoIGQ9Im0yMDggNDE2aDMydjk2aC0zMnptMCAwIiBmaWxsPSIjZTc2ZTU0Ii8+PHBhdGggZD0ibTIwOCAzNTJoMzJ2MzJoLTMyem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMCA0ODBoNTEydjMyaC01MTJ6bTAgMCIgZmlsbD0iI2M5OGEyZSIvPjxwYXRoIGQ9Im0yNTYgNjRoMTEydi00OGgtMjI0djQ4em0wIDAiIGZpbGw9IiNiYThhNWEiLz48cGF0aCBkPSJtMCAwaDUxMnYzMmgtNTEyem0wIDAiIGZpbGw9IiNjOThhMmUiLz48L3N2Zz4K" >
        <h3 class="room__title">HVAC</h3>
        <p class="room__description">1 devices</p>
      </div>
      <div class="room">
        <img
          class="room__icon"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIC0xMTIgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtNjQgMGgzODR2Mjg4aC0zODR6bTAgMCIgZmlsbD0iI2E0NzdiZCIvPjxnIGZpbGw9IiNmZmNiNWEiPjxwYXRoIGQ9Im0wIDBoMzJ2MzJoLTMyem0wIDAiLz48cGF0aCBkPSJtMCA2NGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0wIDEyOGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0wIDE5MmgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0wIDI1NmgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im00ODAgMGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im00ODAgNjRoMzJ2MzJoLTMyem0wIDAiLz48cGF0aCBkPSJtNDgwIDEyOGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im00ODAgMTkyaDMydjMyaC0zMnptMCAwIi8+PHBhdGggZD0ibTQ4MCAyNTZoMzJ2MzJoLTMyem0wIDAiLz48cGF0aCBkPSJtMTYwIDEyOGgtMzJjMC0zNS4yOTY4NzUgMjguNzAzMTI1LTY0IDY0LTY0djMyYy0xNy42NDg0MzggMC0zMiAxNC4zNTE1NjItMzIgMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zODQgMTI4aC0zMmMwLTE3LjY0ODQzOC0xNC4zNTE1NjItMzItMzItMzJ2LTMyYzM1LjI5Njg3NSAwIDY0IDI4LjcwMzEyNSA2NCA2NHptMCAwIi8+PHBhdGggZD0ibTE5MiAyMjRjLTM1LjI5Njg3NSAwLTY0LTI4LjcwMzEyNS02NC02NGgzMmMwIDE3LjY0ODQzOCAxNC4zNTE1NjIgMzIgMzIgMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zMjAgMjI0di0zMmMxNy42NDg0MzggMCAzMi0xNC4zNTE1NjIgMzItMzJoMzJjMCAzNS4yOTY4NzUtMjguNzAzMTI1IDY0LTY0IDY0em0wIDAiLz48L2c+PHBhdGggZD0ibTIyNCAxMjhoNjR2MzJoLTY0em0wIDAiIGZpbGw9IiNmZmYiLz48L3N2Zz4K" >
        <h3 class="room__title">Senors</h3>
        <p class="room__description">2 devices</p>
      </div>
      <div class="room">
        <img
          class="room__icon"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMCAzMmg1MTJ2MzJoLTUxMnptMCAwIiBmaWxsPSIjYjBiNGI5Ii8+PGcgZmlsbD0iIzc3OTU5ZSI+PHBhdGggZD0ibTMyIDBoMzJ2MTEyaC0zMnptMCAwIi8+PHBhdGggZD0ibTk2IDBoMzJ2MTEyaC0zMnptMCAwIi8+PHBhdGggZD0ibTE2MCAwaDMydjExMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zMjAgMGgzMnYxMTJoLTMyem0wIDAiLz48cGF0aCBkPSJtMzg0IDBoMzJ2MTEyaC0zMnptMCAwIi8+PHBhdGggZD0ibTQ0OCAwaDMydjExMmgtMzJ6bTAgMCIvPjwvZz48cGF0aCBkPSJtMzIgNjRoMzJ2NDhoLTMyem0wIDAiIGZpbGw9IiM2MjgwOGMiLz48cGF0aCBkPSJtOTYgNjRoMzJ2NDhoLTMyem0wIDAiIGZpbGw9IiM2MjgwOGMiLz48cGF0aCBkPSJtMTYwIDY0aDMydjQ4aC0zMnptMCAwIiBmaWxsPSIjNjI4MDhjIi8+PHBhdGggZD0ibTMyMCA2NGgzMnY0OGgtMzJ6bTAgMCIgZmlsbD0iIzYyODA4YyIvPjxwYXRoIGQ9Im0zODQgNjRoMzJ2NDhoLTMyem0wIDAiIGZpbGw9IiM2MjgwOGMiLz48cGF0aCBkPSJtNDQ4IDY0aDMydjQ4aC0zMnptMCAwIiBmaWxsPSIjNjI4MDhjIi8+PHBhdGggZD0ibTI4OCA5NmgyMjR2NDE2aC0yMjR6bTAgMCIgZmlsbD0iIzQ4YzhlZiIvPjxwYXRoIGQ9Im0zNTIgMzg0aDMydjEyOGgtMzJ6bTAgMCIgZmlsbD0iIzI0YjJkMyIvPjxwYXRoIGQ9Im00MTYgMzg0aDMydjEyOGgtMzJ6bTAgMCIgZmlsbD0iIzI0YjJkMyIvPjxwYXRoIGQ9Im00MTYgMzIwaDMydjMyaC0zMnptMCAwIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0ibTM1MiAzMjBoMzJ2MzJoLTMyem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtMCA5NmgyMjR2NDE2aC0yMjR6bTAgMCIgZmlsbD0iIzQ4YzhlZiIvPjxwYXRoIGQ9Im02NCAzODRoMzJ2MTI4aC0zMnptMCAwIiBmaWxsPSIjMjRiMmQzIi8+PHBhdGggZD0ibTEyOCAzODRoMzJ2MTI4aC0zMnptMCAwIiBmaWxsPSIjMjRiMmQzIi8+PHBhdGggZD0ibTEyOCAzMjBoMzJ2MzJoLTMyem0wIDAiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtNjQgMzIwaDMydjMyaC0zMnptMCAwIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==" >
        <h3 class="room__title">Curtains</h3>
        <p class="room__description">7 devices</p>
      </div>
      <div class="room">
        <img
          class="room__icon"
          src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSItMzIgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiPjxwYXRoIGQ9Im0zMzkuMTA1NDY5IDQxNmgtMjMwLjIxMDkzOGwtMy45MDIzNDMtMi40NDkyMTljLTY1Ljc0NjA5NC00MS4zNTkzNzUtMTA0Ljk5MjE4OC0xMTIuMjIyNjU2LTEwNC45OTIxODgtMTg5LjU1MDc4MSAwLTEyMy41MTk1MzEgMTAwLjQ4MDQ2OS0yMjQgMjI0LTIyNHMyMjQgMTAwLjQ4MDQ2OSAyMjQgMjI0YzAgNzcuMzI4MTI1LTM5LjI0NjA5NCAxNDguMTkxNDA2LTEwNC45OTIxODggMTg5LjU1MDc4MXptMCAwIiBmaWxsPSIjNDhjOGVmIi8+PHBhdGggZD0ibTIyNCAzNTJjLTEwNy4wMjM0MzggMC0xOTYuNjQwNjI1LTc1LjQ4ODI4MS0yMTguNjg3NS0xNzYtMy4zOTA2MjUgMTUuNDg4MjgxLTUuMzEyNSAzMS41MTk1MzEtNS4zMTI1IDQ4IDAgNzcuMzI4MTI1IDM5LjI0NjA5NCAxNDguMTkxNDA2IDEwNC45OTIxODggMTg5LjU1MDc4MWwzLjkwMjM0MyAyLjQ0OTIxOWgyMzAuMjI2NTYzbDMuOTAyMzQ0LTIuNDQ5MjE5YzY1LjczMDQ2OC00MS4zNTkzNzUgMTA0Ljk3NjU2Mi0xMTIuMjIyNjU2IDEwNC45NzY1NjItMTg5LjU1MDc4MSAwLTE2LjQ4MDQ2OS0xLjkyMTg3NS0zMi41MTE3MTktNS4zMTI1LTQ4LTIyLjA0Njg3NSAxMDAuNTExNzE5LTExMS42NjQwNjIgMTc2LTIxOC42ODc1IDE3NnptMCAwIiBmaWxsPSIjMjRiMmQzIi8+PHBhdGggZD0ibTMyMCA0MTZoLTE5MnYtMTM1LjY3OTY4OGw5Ni03Ni44MDA3ODEgOTYgNzYuODAwNzgxem0wIDAiIGZpbGw9IiNmZmNiNWEiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJtMTI4IDk2aDMydjMyaC0zMnptMCAwIi8+PHBhdGggZD0ibTk2IDE2MGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im02NCAyMjRoMzJ2MzJoLTMyem0wIDAiLz48cGF0aCBkPSJtMTkyIDEyOGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0yMjQgNjRoMzJ2MzJoLTMyem0wIDAiLz48cGF0aCBkPSJtMjU2IDEyOGgzMnYzMmgtMzJ6bTAgMCIvPjxwYXRoIGQ9Im0zMjAgMTYwaDMydjMyaC0zMnptMCAwIi8+PHBhdGggZD0ibTM1MiAyMjRoMzJ2MzJoLTMyem0wIDAiLz48L2c+PHBhdGggZD0ibTE5MiAzMjBoNjR2OTZoLTY0em0wIDAiIGZpbGw9IiNjOThhMmUiLz48cGF0aCBkPSJtMTkyIDMyMGg2NHYzMmgtNjR6bTAgMCIgZmlsbD0iI2FkNzEyYyIvPjxwYXRoIGQ9Im0xMjggMzUyaDE5MnY2NGgtMTkyem0wIDAiIGZpbGw9IiNmYmE2MWYiLz48cGF0aCBkPSJtNDIyLjE5MTQwNiA1MTJoLTM5Ni4zODI4MTJsNDIuNjU2MjUtMTI4aDMxMS4wNzAzMTJ6bTAgMCIgZmlsbD0iI2Q3ZGVlMiIvPjxwYXRoIGQ9Im0zNi40NjQ4NDQgNDgwLTEwLjY1NjI1IDMyaDM5Ni4zODI4MTJsLTEwLjY1NjI1LTMyem0wIDAiIGZpbGw9IiNiZmM5ZDEiLz48cGF0aCBkPSJtMTI4IDQzMmgzMnYzMmgtMzJ6bTAgMCIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im0yODggNDMyaDMydjMyaC0zMnptMCAwIiBmaWxsPSIjZmZmIi8+PC9zdmc+Cg==">
        <h3 class="room__title">Security</h3>
        <p class="room__description">3 devices</p>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../components/Back.vue';

export default {
  name: 'Bedroom',
  components: {
    Back,
  },
  method() {
    this.$router.go(-1);
  },
};
</script>

<style lang="scss">
    .bedroom {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 30px -15px;
        text-align: center;
        display: flex;
        align-items: center;
    }

</style>

