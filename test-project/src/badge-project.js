import { LitElement, html, css } from "lit";
import "./edu-badge.js";
import "./search-widget.js";



export class BadgeProject extends LitElement {
  static get tag() {
    return "badge-project";
  }
  static get properties() {
    return {
      badges: { type: Array },
    };
  }

  constructor() {
    super();
    this.container = 'Container';
    this.badges = [];
    this.getSearchResults().then((results) => {
      this.badges = results;
    });
  }


  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
  
        border: 2px solid black;
        display: flex;
      }
      .item {
        display: inline-flex;
      }
    `;
  }

  async getSearchResults(value = '') {
    const address = `/api/badge-back?search=${value}`;
    const results = await fetch(address).then((response) => {
      if (response.ok) {
        return response.json()
      }
      return [];
    })
    .then((data) => {
      return data;
    });
    return results;
  }

  async _handleSearchEvent(e) {
    const term = e.detail.value;
    this.badges = await this.getSearchResults(term);
    
  }

  render() {
    return html`
    <h2>${this.container}</h2>
    <search-widget @value-changed="${this._handleSearchEvent}"></search-widget>
      <div class="wrapper">
        ${this.badges.map(
          (badge) => html`
            <div class="item">
              <edu-badge name="${badge.name}" creator="${badge.creator}" image="${badge.image}" department="${badge.department}">
              </edu-badge>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(BadgeProject.tag, BadgeProject);