import React, { Component } from "react";
import Player from './Player';
import { Button, ThemeProvider } from '@material-ui/core';
import * as $ from "jquery";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
export const authUrl = 'https://accounts.spotify.com/authorize';

class PlayerApp extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "", alt:"Album Cover"}]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      is_playing: "Paused",
      progress_ms: 0,
      no_data: false,
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }
  getCurrentlyPlaying(token) {
      // Make a call using the token
      $.ajax({
        url: "https://api.spotify.com/v1/me/player",
        type: "GET",
        beforeSend: (xhr) => {
          xhr.setRequestHeader("Authorization", "Bearer " + token);
        },
        success: (data) => {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms,
          });
        }
      });
  }
  componentDidMount() {
      // Set token
      let _token = hash.access_token;
      if (_token) {
      // Set token
      this.setState({
          token: _token
      });
      }
  }
  componentWillUnmount() {
      // clear the interval to save resources
      clearInterval(this.interval);
  }

  tick() {
    if(this.state.token) {
        this.getCurrentlyPlaying(this.state.token);
    }
  }
  render() {
    return (
      <ThemeProvider>
        <div>
        {!this.state.token && (
            <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
            <Button variant="primary">
            Login to Spotify
            </Button>
            </a>
        )}
        {this.state.token && (
            // Spotify Player Will Go Here In the Next Step
            <Player
            item={this.state.item}
            is_playing={this.state.is_playing}
            progress_ms={this.progress_ms}
            />
        )}
        </div>
      </ThemeProvider>    
    );
  }
}

export default PlayerApp;
