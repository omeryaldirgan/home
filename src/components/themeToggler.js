import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './styles/themeToggler.scss'
class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <div className="toggler">
            <div>
            <label>
                    <input
                    type="checkbox"
                    onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                    checked={theme === 'dark'}
                    />{' '}
               <span className="switch"></span>
               <span className="button"></span>     
            </label>
            </div>
          </div>
        )}
      </ThemeToggler>
    )
  }
}

export default ThemeToggle;