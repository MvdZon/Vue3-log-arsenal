let itemIsInitialized = false

function watchProperty(_this, key, propType){
	const componentName = _this.$.type.name

	_this.$watch(
		() => _this[key],
		(newValue, oldValue) => {
			if(itemIsInitialized === false) return 
			const $debugLogList = document.getElementById('v-debug-log-list')
			const id = crypto.randomUUID()

			resetNewItems($debugLogList)
			createListItem(id, $debugLogList, propType, componentName, key)

			const newListItem = document.getElementById(id)

			if(typeof oldValue === 'object') {
				createObjectHTML(oldValue, newListItem, 'Old:')
				createObjectHTML(newValue, newListItem, 'New:')
			} else {
				createPrimitiveValueHTML(newValue, oldValue, $debugLogList, newListItem)
			}
		}
	)
}

function createListItem(id, $debugLogList, propType, componentName, key){
	const dataset = Object.keys($debugLogList.dataset)
	const dataV = dataset[0]
	const liHTML = `
		<li data-${dataV} id="${id}">
			<strong data-${dataV}>${componentName} > ${propType} > ${key}</strong>
		</li>`

	$debugLogList.insertAdjacentHTML('afterbegin', liHTML)
	
	const newListItem = document.getElementById(id)

	setTimeout(() => {
		newListItem.classList.add('show')
		newListItem.classList.add('new')
	}, 10);
}

function resetNewItems($debugLogList) {
	if($debugLogList === null) return

	$debugLogList.querySelectorAll('li.new').forEach(element => {
		element.classList.remove('new');
	});
}

function createPrimitiveValueHTML(newValue, oldValue, $debugLogList, newListItem) {
	const dataset = Object.keys($debugLogList.dataset)
	const dataV = dataset[0]
	const liHTML = `
		<span data-${dataV}>Old: ${oldValue}</span>
		<span data-${dataV}>New: ${newValue}</span>`
	
	newListItem.insertAdjacentHTML('beforeend', liHTML)
}

function createObjectHTML(data, parent, label) {
    const container = document.createElement('div');

	if(label) {
		container.insertAdjacentHTML('afterbegin', `<p>${label}</p>`)
	}

    for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
            const wrapper = document.createElement('div');
            const toggle = document.createElement('span');
            toggle.className = 'toggle';
            toggle.textContent = key;
            toggle.onclick = function () {
                const nested = this.nextSibling;
                if (nested.style.display === 'none') {
                    nested.style.display = 'block';
                    this.classList.add('open');
                } else {
                    nested.style.display = 'none';
                    this.classList.remove('open');
                }
            };
            const nested = document.createElement('div');
            nested.className = 'nested';
            createObjectHTML(data[key], nested);

            wrapper.appendChild(toggle);
            wrapper.appendChild(nested);
            container.appendChild(wrapper);
        } else {
            const item = document.createElement('div');
            item.textContent = `${key}: ${data[key]}`;
            container.appendChild(item);
        }
    }

    parent.appendChild(container);
}

const logging = {
	created() {
		for (const key in this.$data) {
			watchProperty(this, key, 'data')
		}
	
		for (const key in this.$props) {
			watchProperty(this, key, 'prop')
		}

		for (const key in this.$options.computed) {
			watchProperty(this, key, 'computed')
		}

		setTimeout(() => {
			itemIsInitialized = true
		}, 100)
	}
};

export default logging