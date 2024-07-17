<template>
    <section>
        <article id="v-debug-controls">
            <div>
                <label for="v-debug-toggle-logging">Logging</label>
                <input 
                    type="checkbox" 
                    id="v-debug-toggle-logging" 
                    v-model="loggingIsEnabled" 
                />
            </div>
            <div>
                <label for="v-debug-toggle-data-viewer">Data viewer</label>
                <input 
                    type="checkbox" 
                    id="v-debug-toggle-data-viewer" 
                    v-model="dataViewerIsEnabled"
                />
            </div>
        </article>
        <article 
            v-show="loggingIsEnabled === true"
            class="debug-log"
        >
            <ul id="v-debug-log-list"></ul>
        </article>
    </section>
</template>

<script>
export default {
    name: 'debug-tool',
    data(){
        return {
            loggingIsEnabled: true,
            dataViewerIsEnabled: true
        }
    },
    watch: {
        dataViewerIsEnabled(oldValue, newValue) {
            if(newValue === true) {
                const $debugInfo = document.querySelectorAll('.debug-info')

                for (const element of $debugInfo) {
                    element.remove()
                }
            }
        }
    }
}
</script>

<style scoped>
*,
*:before,
*:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

section {
    position: fixed;
    right: 0;
    top: 0;
    width: 450px;
    min-width: 250px;
    background: white;
    z-index: 1;
    height: 100%;
    padding: 10px;

    div {
        padding: 5px;
    }
}

#v-debug-controls {
    display: flex;
    justify-content: flex-start;
}

.debug-component-outline {
    flex-direction: column;
    display: flex;
    height: 100%;
    border: 1px solid #333;
    color: #333;

    .debug-log {
        height: 0;
        flex: 1;
    }

    ul {
        padding-left: 0;
        list-style-type: none;
        font-size: 12px;
        height: 100%;
        overflow: auto;

        li {
            padding: 6px 10px;
            list-style-type: none;
            transform: scale(0.5);
            transition: all 0.3s;
            opacity: 0;
            border-bottom: 1px dashed;

            &.show {
                opacity: 1;
                transform: scale(1);
            }

            &:nth-of-type(odd) {
                background: #f7f7f7;
            }

            > * {
                display: block;
            }

            &.new {
                background-color: #42b88357;
                color: black;
                font-size: 15px;
            }
        }
    }
}
</style>

<style>
.nested {
    display: none;
    margin-left: 20px;
}
.toggle::before {
    content: "▶";
    cursor: pointer;
}
.toggle.open::before {
    content: "▼";
}



div:has(.debug-info) {
    position: relative;
}

.debug-info {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    padding: 15px;
    max-height: 100vh;
    overflow: auto;
    z-index: 10000;
    border: 1px solid #333;

    ul {
        padding-left: 0;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    h3 {
        margin-top: 0;
    }
}
</style>