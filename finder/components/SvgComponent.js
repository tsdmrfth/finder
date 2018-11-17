import React from 'react'
import Svg, {Path, G} from 'react-native-svg'

const SvgComponent = props => (
    <Svg width={500} height={500} {...props}>
        <Path
            fill="#010101"
            d="M199.835 107.602c.09 4.899 2.832 15.398 5.054 19.931 1.458.505 1.977-.875 2.999-.637-2.851-4.037-4.401-14.389-4.401-22.195-.758.904-3.652 2.293-3.652 2.901zm278.247 205.959c.055 29.049-10.204 53.193-20.323 74.986-.904.968-3.042.695-4.906.701-2.628 29.428-5.054 68.673-28.033 77.092-8.332 3.056-15.768-.871-20.324-6.31-10.154-12.117-13.328-34.586-17.519-52.562-1.543-1.255-4.998-.609-7.01-1.4-6.132-9.835-14.485-34.546.702-39.948-5.754-7.057 6.504-14.346 6.308-24.528-17.152 14.155-33.507 35.174-56.769 45.552-4.346 27.044-10.556 48.742-21.026 68.682-9.67 18.431-26.594 37.341-51.159 37.844-41.193.854-62.947-29.286-70.782-64.477-2.138-9.588-6.027-21.283 2.103-25.229-16.917-11.403-37.585-29.708-39.947-56.766-.869-9.986-.223-20.388 5.607-25.231 7.078-1.338 15.096-.414 21.725.701-1.156-9.118-2.719-17.836-3.502-27.333-3.702.799-7.738 4.5-11.916 4.204-4.702-.321-7.583-6.117-11.213-7.008-2.726-.665-5.55.588-8.41.7-36.239 1.451-74.477-21.172-84.8-50.459-10.338-5.103-21.109-13.436-18.221-29.436-14.737 7.254-23.28-8.458-14.017-16.821 5.103-4.604 14.746-3.111 21.026 0 3.791-5.788 8.712-10.442 18.921-9.812-.077-8.249-5.698-14.184-2.803-23.126 17.366-9.503 22.517 15.18 25.23 29.433 10.856 2.384 18.446 10.442 14.717 25.231 7.892 3.791 17.359 6.005 28.734 6.306.295-18.158 20.542-16.363 37.844-17.52 2.643-25.658-5.705-45.862-21.025-57.467-11.789 4.688-24.052-6.54-18.922-18.922-3.602-3.476-14.212-3.441-20.323-2.102 2.221 7.589 11.507 8.123 14.717 14.717-6.763-3.98-14.185-7.302-16.821-15.417 2.285-3.083 8.852-1.892 14.017-2.103-21.747-15.159-50.382-23.443-58.167-52.561-8.592-4.696-23.708-24.312-13.315-37.144 1.198-1.472 3.868-2.634 6.307-3.505C53.077 16.046 66.651 6.2 81.417 12.9c17.121-16.546 55.196-9.047 69.381 4.905 4.473-3.475 12.945-3.329 14.718 2.804 18.48-8.418 36.191 4.393 36.442 23.126 4.381 1.695 7.344 4.801 9.11 9.11 6.293-2.614 5.012-10.442 12.615-10.512 14.149-.126 12.439 25.923 3.504 32.939 3.869 7.07 1.051 15.895-8.411 15.418-1.059 2.915-1.731 6.215-3.505 8.411-2.74.763-5.138 1.872-9.11 1.401-1.977 9.51-.387 21.368 4.205 26.63 3.946-.203 7.093-.244 9.11 2.104 1.731 3.322-1.745 6.18 0 9.11 7.688-5.081 21.648-2.305 15.418 9.11 3.097-2.277 6.3-4.443 9.111-7.008 8.107 4.044 14.325 9.966 22.425 14.015.491 3.764-2.074 4.473-2.804 7.009 8.089-6.862 19.633-10.273 32.939-11.914a92.068 92.068 0 0 1 11.913 10.512c15.222-5.718 34.572-16.596 44.151-32.939 3.049-5.193 7.956-13.532 7.008-18.221-1.471-7.294-12.354-4.912-17.519-9.812-5.18-12.916 13.882-14.541 21.025-9.11 3.321-.883 4.301-4.107 7.008-5.606-1.527-5.944-5.243-9.715-4.205-18.223 6.446-12.846 22.084-4.254 23.828 7.009 15.241-10 23.645 11.003 9.109 17.521 2.88 11.494 19.021 8.41 30.135 8.41 9.791 11.459-5.558 21.13-16.819 22.426-11.964 15.593-16.939 35.546-26.631 52.563-9.655 16.952-21.81 30.423-35.742 42.75 9.824 6.994 19.253 14.387 27.334 23.127 57.449-12.059 100.824 20.333 100.922 73.596zm-14.018 56.066c6.771-20.282 13.071-40.376 11.214-64.478-3.124-40.55-37.073-69.893-82.696-65.877-27.937 2.458-48.876 18.572-63.775 35.741-15.985 18.424-26.357 40.957-34.341 65.878-2.277-.491-.49-3.952-3.506-2.102-21.472 15.207-51.88 21.466-86.901 23.127 16.749 22.907 50.151 35.069 87.604 32.938 33.113-1.878 58.252-20.203 77.089-39.244 3.952-3.995 17.9-15.551 19.624-19.624 2.179-5.144-.653-12.216 2.803-15.417 1.92 8.759-1.133 18.444-2.803 25.929 16.974 15.965 41.271 24.607 75.688 23.129zm-1.401 2.801c-33.807.871-57.58-8.289-75.689-23.128-1.478 4.6-3.405 8.747-6.307 11.916 14.772 18.789 39.98 30.358 75.688 25.93 1.866-5.144 4.591-9.427 6.308-14.718zm-51.16-252.995c9.271-1.844 22.077-6.371 17.521-17.521-9.341-3.315-13.406 2.312-22.426-.7-17.975-6-15.502-40.466-30.835-39.947-4.199.148-7.204 4.345-7.711 7.007-1.927 10.212 7.793 12.917 4.904 23.127-1.086-1.017-1.471-2.734-1.4-4.905-6.791 3.588-11.136 13.028-9.11 23.128-7.604 26.967-27.149 42-51.861 51.86 8.285 12.741 13.995 28.053 14.718 48.358 8.879.701 15.656 3.504 22.425 6.307 13.962-12.7 26.717-25.923 36.444-43.451 9.602-17.29 14.451-38.063 27.331-53.263zm-14.718-30.837c14.928-4.022 5.024-23.912-6.308-12.615 2.75 3.561 4.032 8.586 6.308 12.615zm-37.142 16.118c.205-5.404 2.411-8.802 3.504-13.316-6.258-2.032-20.954-5.48-19.622 5.607 3.553 4.389 12.676 3.211 16.118 7.709zm15.418 136.661c-11.929-13.854-28.215-28.438-51.861-30.135-5.453-.386-14.463 1.268-18.923-.7 2.277-.057 4.311-.357 5.609-1.402-15.687-18.894-36.746-32.398-60.272-43.451 2.584-1.528 4.906 2.312 8.409 2.104 1.683-4.394 4.696-7.45 6.307-11.914-6.02-4.954-12.508-9.448-19.621-13.315-.126 10.68 4.792 19.924 2.803 30.135-9.139-2.305-15.508-7.386-25.229-9.11-2.25 10.562 4.416 17.919 7.008 25.931-8.837 11.948-23.022 18.564-36.442 25.931 8.668 6.958 16.329 15.838 17.52 28.733 2.327 25.124-20.016 39.457-35.041 49.058 1.037 26.764 7.232 48.364 16.82 66.578 42.925.645 76.349-8.213 102.322-24.529 14.643-43.523 37.146-79.188 80.591-93.914zm-51.862-31.537c.581-20.71-8.913-44.075-21.726-54.665-10.868-8.985-36.323 3.273-41.349 14.717 22.37 8.705 37.606 24.536 53.262 39.947l9.813.001zm-32.236 267.713c20.477-19.433 32.236-55.267 35.741-89.004-22.596 13.05-68.162 9.581-91.808 0 2.137 11.613-.827 23.296-4.206 32.236-2.397 6.352-4.535 13.976-9.11 15.419 2.895-8.788 9.727-17.365 9.11-27.331-18.515 2.509-33.059 8.998-41.348 21.726 7.352 32.798 28.685 58.525 63.774 60.971 16.996 1.185 29.239-5.843 37.847-14.017zm-44.854-313.967c-2.06-6.111-.525-15.826-4.905-19.622-1.892 3.952-6.994 4.688-8.41 9.11 3.735 4.213 7.555 8.333 13.315 10.512zm.701 7.009c-1.759-7.583-9.413-9.279-14.017-14.016.609 4.114-2.62 4.386-2.804 7.708 6.294 1.415 10.564 4.864 16.821 6.308zm-20.324-18.923c3.232-3.308 8.852-4.233 7.709-11.914-2.768-3.995-9.7-1.29-12.614.701-3.959-2.25-5.873-1.584-8.411 2.102 3.568.638 9.854-1.444 11.213 1.401-5.192 13.484-16.525 22.86-30.835 21.024-13.47-1.724-26.63-18.664-26.63-32.939 0-26.827 38.468-34.83 53.962-51.16 4.01-4.219 8.999-10.884 10.512-16.118 2.396-8.27-.342-20.842-8.41-20.324-6.636.427-7.226 10.772-11.916 11.914-9.936 26.141-56.374 38.35-46.254 82.698.925 4.051 3.933 10.73 7.008 14.717 5.753 7.472 19.862 18.544 32.238 16.821 8.466-1.179 11.241-12.187 23.829-8.41 1.268-1.998 3.434-3.106 2.803-7.009.772-3.335-4.174-.961-4.204-3.504zm5.607 255.099c1.451-5.088.372-12.713.7-18.923-20.534 2.131-34.662 10.653-46.254 21.727-.127 6.202.721 11.431 2.101 16.119 9.834-8.158 23.339-18.705 43.453-18.923zm-7.009-318.873c2.005-2.6 4.416-8.011 0-9.812-13.813 19.833-43.85 23.43-54.664 46.255 8.262 1.955 7.373-5.235 9.812-9.11 3.112 1.03 4.114 0 7.709 0 2.86-1.809 2.488-6.855 4.905-9.111 3.147.343 5.249-.35 7.71-.701 2.319-1.417 2.124-5.354 4.205-7.009 3.743.779 6.932.918 9.812-.7 1.332-2.404 1.984-5.495 2.803-8.41 3.54.503 5.116-.953 7.708-1.402zm2.804 100.918c-4.513-6.701-7.386-15.034-8.41-25.23-16.567 11.003-34.972 20.155-49.757 32.939v10.512c7.737 1.844 15.873 3.287 21.725 7.008 13.84-6.713 27.381-13.736 36.442-25.229zm-60.27 106.524c18.208-9.552 44.04-25.313 41.348-51.159-2.896-27.794-35.006-42.96-66.578-31.537 22.489 12.228 33.12 52.659 25.23 82.696zm28.734-222.16c5.999-5.859 20.534-23.533 7.008-27.332-13.891-3.889-20.232 17.022-28.032 20.324 3.56 18.158-10.568 29.771-21.726 30.836-35.208 3.378-37.312-52.913-2.101-51.861-.653-12.796 6.18-18.116 11.913-24.529-1.885-4.723-10.246-2.704-12.615 0-10.288-7.344-20.737-14.184-35.741-15.418-29.511-2.419-43.296 19.187-50.459 41.348 1.023 2.951 5.376 2.573 6.307 5.607-3.413 1.03-6.068-5.222-7.008-2.104-1.899 4.85-1.92 14.605-.701 20.324 1.121 2.383 5.872 1.135 6.308 4.205-2.523.188-3.379-1.291-5.607-1.402 8.423 28.727 37.255 37.038 59.57 51.861-2.081-5.86-7.33-8.549-7.008-16.821 8.067-3.083 19.105 2.167 24.529 6.308-8.193-1.045-15.215-6.581-23.127-5.607 1.816 8.698 7.029 13.995 11.915 19.624 1.976-3.189 8.935-7.989 12.616-4.905-18.264.679-16.19 27.556 1.402 25.229 7.358-.974 7.54-9.917 12.615-11.914-1.563 4.746-4.015 8.599-7.009 11.914 11.676 10.05 20.135 23.316 21.726 43.451 10.072-6.279 19.721-12.986 29.436-19.623-25.25-6.244-40.908-22.643-38.546-49.757 2.138-24.556 21.958-37.675 34.335-49.758zm4.205-29.435c1.745-32.014-50.79-31.495-47.656 1.401 11.978 1.57 18.193 8.909 22.425 18.222 8.726-6.224 12.11-17.794 25.231-19.623zM169.02 286.229c.154-27.018-5.234-48.498-16.82-63.775-14.395 7.113-37.284 3.771-51.162-1.402-1.737.834-.847 4.297-4.205 3.504 2.754-8.15 6.609-17.066 1.402-23.828-7.604-9.867-30.619-4.366-28.033 8.41 2.123 10.499 18.789 3.379 21.726 0-3.603 9.939-22.854 10.611-23.829-.7-.728-8.445 7.485-13.813 16.819-14.717-3.145-12.881-4.688-34.362-21.023-29.436-3.665 9.896 6.433 19.083 2.102 27.333-1.857.224.659-3.925-2.102-2.803-22.566-5.389-20.177 32.875-6.309 32.938 11.41.057 6.344-16.237 5.607-23.126 6.819 8.557 4.941 25.265-5.607 25.229-10.351-.036-12.229-14.087-12.615-25.931-9.721-4.113-24.984-3.049-21.726 11.915 4.97 6.987 16.141-1.675 21.025 1.402-.126 3.307-3.778-1.256-3.505 2.101-3.734 19.904 13.142 25.132 25.23 31.538-3.098 1.471-6.209-2.965-6.307 0 14.987 33.996 61.949 55.23 109.332 41.348zm-15.419 5.606c2.634 8.094 14.682 6.229 14.716-2.803-4.941.896-9.831 1.85-14.716 2.803zm-5.607-196.231c35.398 3.441 33.863-54.426-1.401-48.357-27.29 4.696-24.467 45.848 1.401 48.357zm2.102 125.447c-2.523-8.15-19.771-11.97-16.821 3.504 6.855.085 11.839-1.71 16.821-3.504zM68.801 31.83c1.885-7.505 9.777-12.588 11.213-18.221-14.087-4.71-24.073 3.588-23.127 18.221 3.799-1.31 7.857-.343 11.914 0zm-5.607 12.615c.89-4.255 3.035-7.239 4.206-11.214-4.612-.407-5.9-.407-10.513 0 .715 5.131 2.067 9.616 6.307 11.214zm-7.708-9.812c-15.573 4.751-4.878 33.954 5.607 33.64-1.739-6.42-.484-15.887 1.401-21.025-3.399-3.14-6.378-6.707-7.008-12.615z"
        />
        <Path
            fill="#D6A563"
            d="M204.887 127.533c-2.22-4.534-4.961-15.033-5.053-19.931 0-.608 2.895-1.997 3.651-2.901 0 7.807 1.548 18.158 4.401 22.195-1.023-.238-1.541 1.142-2.999.637z"
        />
        <Path
            fill="#669BC7"
            d="M475.278 305.149c1.857 24.102-4.443 44.193-11.214 64.478-34.417 1.479-58.715-7.163-75.688-23.129 1.667-7.484 4.723-17.17 2.803-25.929-3.453 3.203-.622 10.273-2.803 15.417-1.724 4.073-15.672 15.629-19.624 19.624-18.837 19.041-43.976 37.366-77.09 39.244-37.452 2.132-70.853-10.026-87.603-32.938 35.021-1.661 65.429-7.92 86.901-23.127 3.016-1.851 1.228 1.61 3.506 2.102 7.983-24.92 18.354-47.451 34.341-65.878 14.899-17.169 35.839-33.283 63.772-35.741 45.625-4.015 79.575 25.328 82.699 65.877z"
        />
        <Path
            fill="#669BC7"
            d="M386.974 349.3c18.109 14.839 41.881 23.999 75.689 23.128-1.718 5.291-4.444 9.574-6.309 14.718-35.707 4.429-60.915-7.142-75.688-25.93 2.902-3.168 4.83-7.317 6.308-11.916z"
        />
        <Path
            fill="#FFD035"
            d="M429.023 101.913c4.557 11.149-8.249 15.677-17.521 17.521-12.88 15.2-17.731 35.973-27.332 53.263-9.728 17.527-22.482 30.751-36.444 43.451-6.769-2.804-13.546-5.607-22.425-6.308-.723-20.303-6.433-35.615-14.718-48.357 24.71-9.862 44.258-24.893 51.861-51.861-2.025-10.1 2.319-19.54 9.11-23.128-.07 2.173.314 3.891 1.4 4.905 2.889-10.211-6.831-12.915-4.904-23.126.507-2.663 3.512-6.861 7.711-7.008 15.333-.518 12.86 33.948 30.835 39.947 9.021 3.013 13.086-2.616 22.427.701z"
        />
        <Path
            fill="#FFD035"
            d="M390.479 75.982c11.333-11.298 21.237 8.593 6.309 12.615-2.279-4.03-3.561-9.055-6.309-12.615zM363.146 91.398c-1.093 4.514-3.299 7.912-3.504 13.316-3.441-4.498-12.564-3.322-16.118-7.708-1.333-11.088 13.365-7.639 19.622-5.608z"
        />
        <Path
            fill="#FFF"
            d="M323.199 211.24c23.646 1.695 39.933 16.28 51.861 30.135-43.444 14.726-65.947 50.391-80.595 93.912-25.972 16.314-59.396 25.174-102.321 24.527-9.588-18.214-15.783-39.813-16.82-66.577 15.025-9.601 37.367-23.933 35.041-49.058-1.191-12.896-8.852-21.775-17.521-28.733 13.421-7.366 27.605-13.982 36.442-25.931-2.593-8.011-9.259-15.369-7.008-25.931 9.72 1.724 16.091 6.805 25.229 9.11 1.989-10.211-2.93-19.455-2.804-30.135 7.113 3.87 13.603 8.361 19.621 13.315-1.609 4.463-4.624 7.52-6.307 11.914-3.503.211-5.823-3.631-8.408-2.104 23.525 11.052 44.585 24.557 60.271 43.451-1.297 1.044-3.33 1.347-5.607 1.402 4.463 1.971 13.473.318 18.926.703z"
        />
        <Path
            fill="#FFF"
            d="M301.474 155.175c12.812 10.589 22.307 33.954 21.726 54.664h-9.812c-15.655-15.411-30.892-31.242-53.262-39.948 5.024-11.445 30.479-23.701 41.348-14.716z"
        />
        <Path
            fill="#669BC7"
            d="M326.704 388.548c-3.505 33.739-15.265 69.57-35.741 89.007-8.607 8.17-20.851 15.2-37.846 14.014-35.089-2.445-56.423-28.174-63.774-60.971 8.292-12.729 22.833-19.216 41.348-21.726.617 9.965-6.217 18.545-9.11 27.334 4.577-1.445 6.715-9.071 9.11-15.42 3.378-8.942 6.343-20.625 4.206-32.238 23.645 9.58 69.211 13.049 91.807 0z"
        />
        <Path
            fill="#FFF"
            d="M241.203 143.962c4.381 3.798 2.845 13.511 4.905 19.622-5.76-2.179-9.58-6.299-13.315-10.512 1.416-4.424 6.519-5.158 8.41-9.11zM232.793 156.575c4.604 4.738 12.258 6.434 14.017 14.016-6.259-1.444-10.527-4.892-16.821-6.307.183-3.322 3.413-3.595 2.804-7.709z"
        />
        <Path
            fill="#D6A563"
            d="M234.195 139.756c1.143 7.681-4.477 8.606-7.709 11.914.029 2.543 4.976.168 4.205 3.505.63 3.903-1.535 5.012-2.803 7.009-12.588-3.778-15.362 7.231-23.829 8.41-12.377 1.724-26.484-9.349-32.238-16.82-3.076-3.988-6.083-10.667-7.008-14.718-10.12-44.348 36.316-56.557 46.254-82.698 4.689-1.141 5.278-11.486 11.916-11.913 8.065-.518 10.807 12.054 8.41 20.323-1.514 5.235-6.504 11.9-10.512 16.119-15.494 16.329-53.962 24.333-53.962 51.16 0 14.274 13.161 31.215 26.63 32.938 14.312 1.836 25.644-7.54 30.835-21.024-1.359-2.846-7.646-.764-11.213-1.401 2.538-3.687 4.45-4.352 8.411-2.102 2.914-1.991 9.846-4.698 12.613-.702z"
        />
        <Path
            fill="#669BC7"
            d="M232.793 387.846c-.33 6.21.751 13.835-.7 18.923-20.113.216-33.619 10.766-43.451 18.923-1.38-4.689-2.229-9.917-2.102-16.119 11.591-11.074 25.72-19.596 46.253-21.727z"
        />
        <Path
            fill="#FFF"
            d="M225.084 78.083c4.416 1.801 2.005 7.212 0 9.812-2.592.449-4.169 1.905-7.708 1.401-.819 2.915-1.472 6.006-2.803 8.41-2.88 1.619-6.069 1.479-9.812.7-2.082 1.655-1.886 5.593-4.205 7.009-2.461.351-4.562 1.044-7.71.701-2.418 2.256-2.047 7.302-4.905 9.111-3.595 0-4.597 1.03-7.709 0-2.438 3.875-1.548 11.066-9.812 9.11 10.814-22.824 40.852-26.42 54.664-46.254zM219.478 163.584c1.024 10.196 3.897 18.53 8.41 25.23-9.062 11.494-22.603 18.516-36.442 25.229-5.853-3.721-13.988-5.165-21.725-7.008v-10.512c14.785-12.783 33.191-21.936 49.757-32.939z"
        />
        <Path
            fill="#FFF"
            d="M208.966 244.179c2.691 25.846-23.142 41.607-41.348 51.159 7.892-30.037-2.74-70.468-25.229-82.696 31.571-11.423 63.681 3.743 66.577 31.537z"
        />
        <Path
            fill="#FFD035"
            d="M203.358 45.846c13.526 3.799-1.009 21.473-7.008 27.332-12.377 12.083-32.197 25.202-34.341 49.758-2.362 27.115 13.293 43.515 38.546 49.757-9.715 6.637-19.364 13.344-29.436 19.623-1.59-20.135-10.049-33.4-21.725-43.451 2.994-3.315 5.445-7.17 7.009-11.914-5.074 1.997-5.256 10.939-12.616 11.914-17.59 2.327-19.666-24.55-1.401-25.229-3.68-3.084-10.639 1.716-12.615 4.905-4.885-5.629-10.1-10.926-11.915-19.624 7.912-.974 14.935 4.562 23.126 5.607-5.423-4.143-16.461-9.391-24.528-6.308-.323 8.27 4.926 10.961 7.007 16.821-22.313-14.823-51.144-23.134-59.569-51.861 2.228.112 3.084 1.591 5.606 1.402-.434-3.07-5.187-1.822-6.309-4.205-1.219-5.719-1.198-15.475.702-20.324.938-3.119 3.595 3.133 7.008 2.104-.933-3.035-5.283-2.657-6.306-5.607C71.755 24.386 85.54 2.78 115.052 5.197c15.005 1.234 25.455 8.074 35.741 15.418 2.37-2.704 10.73-4.723 12.616 0-5.733 6.413-12.566 11.733-11.914 24.529-35.209-1.051-33.107 55.24 2.102 51.861 11.157-1.065 25.286-12.678 21.725-30.836 7.804-3.3 14.146-24.212 28.036-20.323zm-62.373 86.903c1.878-1.787 3.692.427 6.307 0-3.518-5.978-12.727-.498-12.615 5.606 3.834.799 1.759-4.309 4.905-4.205-.688 3.917 4.997 8.291 7.007 4.905-2.947-1.015-5.77-2.165-5.604-6.306z"
        />
        <Path
            fill="#FFF"
            d="M152.901 45.145c-3.133-32.895 49.401-33.415 47.656-1.401-13.12 1.829-16.505 13.399-25.231 19.624-4.232-9.315-10.449-16.653-22.425-18.223zm36.442-9.11c2.859.295 4.421-.715 4.206-3.505-.75-3.392-6.924-2.496-5.607 2.101.195.731.791 1.186 1.401 1.404z"
        />
        <Path
            fill="#010101"
            d="M193.546 32.53c.218 2.788-1.344 3.798-4.205 3.505-.61-.218-1.206-.672-1.401-1.401-1.316-4.598 4.857-5.496 5.606-2.104z"
        />
        <Path
            fill="#FFD035"
            d="M152.2 222.453c11.583 15.277 16.974 36.758 16.82 63.775-47.383 13.883-94.345-7.354-109.329-41.35.098-2.964 3.209 1.472 6.307 0-12.089-6.405-28.965-11.633-25.23-31.537-.273-3.357 3.378 1.205 3.505-2.102-4.884-3.076-16.056 5.585-21.025-1.402-3.259-14.962 12.005-16.028 21.726-11.915.386 11.844 2.264 25.896 12.615 25.931 10.549.035 12.427-16.671 5.607-25.229.736 6.89 5.802 23.183-5.607 23.127-13.868-.062-16.257-38.328 6.309-32.939 2.761-1.122.244 3.027 2.102 2.803 4.331-8.248-5.768-17.436-2.102-27.332 16.337-4.927 17.878 16.553 21.024 29.436-9.335.904-17.549 6.272-16.821 14.717.975 11.312 20.226 10.638 23.829.7-2.937 3.379-19.603 10.499-21.726 0-2.586-12.775 20.429-18.277 28.033-8.41 5.208 6.763 1.352 15.677-1.402 23.828 3.356.791 2.466-2.671 4.205-3.504 13.876 5.174 36.765 8.516 51.16 1.403z"
        />
        <Path
            fill="#FFF"
            d="M168.317 289.032c-.034 9.032-12.082 10.896-14.716 2.803 4.885-.953 9.775-1.907 14.716-2.803zM146.593 47.248c35.264-6.069 36.8 51.797 1.401 48.358-25.868-2.511-28.691-43.663-1.401-48.358zm-.7 33.639c2.858.294 4.422-.714 4.205-3.505-.749-3.392-6.924-2.494-5.606 2.104.279.638.726 1.205 1.401 1.401z"
        />
        <Path
            fill="#010101"
            d="M150.096 77.382c.218 2.789-1.345 3.799-4.206 3.505-.672-.196-1.121-.764-1.401-1.401-1.316-4.598 4.858-5.496 5.607-2.104z"
        />
        <Path
            fill="#FFD035"
            d="M147.294 132.749c-2.615.427-4.43-1.787-6.307 0-.168 4.142 2.657 5.292 5.607 6.308-2.012 3.384-7.696-.989-7.009-4.905-3.146-.105-1.072 5.005-4.905 4.206-.115-6.108 9.094-11.589 12.614-5.609z"
        />
        <Path
            fill="#FFF"
            d="M133.278 224.555c-2.951-15.474 14.296-11.654 16.819-3.504-4.983 1.794-9.967 3.589-16.819 3.504zM80.015 13.609c-1.437 5.634-9.329 10.715-11.213 18.221-4.057-.343-8.115-1.31-11.914 0-.946-14.633 9.04-22.932 23.127-18.221zM67.4 33.231c-1.171 3.975-3.315 6.959-4.206 11.214-4.24-1.598-5.592-6.083-6.307-11.214 4.613-.407 5.901-.407 10.513 0z"
        />
        <Path
            fill="#FFF"
            d="M61.093 68.272c-10.485.315-21.18-28.888-5.607-33.641.63 5.908 3.609 9.476 7.008 12.616-1.885 5.137-3.14 14.605-1.401 21.025z"
        />
        <G>
            <Path
                fill="none"
                stroke="#D6A563"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                d="M203.485 104.701c0 7.807 1.548 18.158 4.401 22.195-1.023-.238-1.541 1.142-3 .637-2.22-4.534-4.961-15.033-5.053-19.931.002-.608 2.896-1.997 3.652-2.901z"
            />
        </G>
        <Path
            fill="#EF3D25"
            d="M209.648 128.194c-.841.113-17.177 2.8-19.153 11.005-1.573 6.537 5.536 19.816 5.536 24.399 4.862.901 9.493-2.008 13.98-3.388 4.489-1.379-3.46-11.632-2.862-15.131.598-3.499 2.973-1.707 4.496-3.207 1.524-1.5 8.452-5.854 6.355-11.681-.668-1.856-3.268-2.676-8.352-1.997z"
        />
        <Path
            fill="none"
            stroke="#010101"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeMiterlimit={10}
            d="M213.15 141.376s-9.433 3.782-10.522 6.972M197.846 131.557c3.877.45 8.595-.095 10.682 1.903"
        />
    </Svg>
);

export default SvgComponent