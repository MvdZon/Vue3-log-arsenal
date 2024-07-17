const componentTooltip = {
    mounted(){
        let $el = this.$el

        // This is needed for when there are multiple root nodes in a component
        if($el.nodeType === Node.TEXT_NODE) $el = this.$el.parentElement
        
        $el.addEventListener("click", (e) => createDebugInfo(e, $el, this))
        $el.classList.add('debug-component-outline')
    }
}

function createDebugInfo(e, $el, _this){
    e.stopPropagation()

    const dataViewerIsChecked = document.getElementById('v-debug-toggle-data-viewer').checked

    if(dataViewerIsChecked === false) return

    removeDebugInfo()
    buildHTML($el, _this)
}

function buildHTML($el, _this) {
    let tooltipHTML = ''

    tooltipHTML += `<div class="debug-info"><h3>${_this.$options.name}</h3><p><strong>Data</strong></p><ul>`
    for(const key in _this.$data) {
		if(typeof _this.$data[key] === 'object') {
            tooltipHTML += `<li>${createObjectHTML(_this.$data[key], key)}</li>`
        } else {
            tooltipHTML += `<li>${key}: ${_this.$data[key]}</li>`
        }
    }
    tooltipHTML += '</ul><p><strong>Computed</strong></p><ul>'
    for(const key in _this.$options.computed) {
		if(typeof _this[key] === 'object') {
            tooltipHTML += `<li>${createObjectHTML(_this[key], key)}</li>`
        } else {
            tooltipHTML += `<li>${key}: ${_this[key]}</li>`
        }
    }
    tooltipHTML += '</ul><button id="close-debug-info">Close</button></div>'
    
    document.body.insertAdjacentHTML('afterbegin', tooltipHTML)

    document.getElementById('close-debug-info').addEventListener('click', removeDebugInfo)
    setClickEvents(document.querySelector('.debug-info'))
}

function createObjectHTML(data, label) {
    let html = '';

    if (label) {
        html += `<span class="toggle">${label}</span>`;
        html += `<div class="nested" style="display:none;">`;
    }

    if (Array.isArray(data)) {
        data.forEach((item, index) => {
            if (typeof item === 'object' && item !== null) {
                html += `<div><span class="toggle">${index}</span><div class="nested" style="display:none;">${createObjectHTML(item)}</div></div>`;
            } else {
                html += `<div>${index}: ${item}</div>`;
            }
        });
    } else {
        for (const key in data) {
            if (typeof data[key] === 'object' && data[key] !== null) {
                html += `
                    <div>
                        <span class="toggle">${key}</span>
                        <div class="nested" style="display:none;">
                            ${createObjectHTML(data[key])}
                        </div>
                    </div>
                `;
            } else {
                html += `<div>${key}: ${data[key]}</div>`;
            }
        }
    }

    if (label) {
        html += `</div>`;
    }

    return html;
}

function setClickEvents(container) {
    const toggles = container.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const nested = this.nextElementSibling;
            if (nested.style.display === 'none') {
                nested.style.display = 'block';
                this.classList.add('open');
            } else {
                nested.style.display = 'none';
                this.classList.remove('open');
            }
        });
    });
}

function removeDebugInfo(){
    const $debugInfo = document.querySelectorAll('.debug-info')

    for (const element of $debugInfo) {
        element.remove()
    }
}

export default componentTooltip