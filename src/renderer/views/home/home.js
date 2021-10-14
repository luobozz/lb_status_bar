import lodash from "lodash"
import { ipcRendererUtil } from "../../util/electron.util"

export default {
    init() {
        setInterval(this.getMonitorInfo, this.mointorTimes)
    },
    getMonitorInfo() {
        this.monitorInfo.forEach(item => {
            if (item.show && item.interval && typeof item.set === "function") {
                item.set(item)
            }
        })
    },
    sfaAction() {
        return {
            show: () => {
                ipcRendererUtil.showMianWindowFunctionArea("show", 100 + 5)
                this.$refs.sfa.style.width = `${100 + 25 + 5}px`
                this.sfa.show = true
            },
            hide: () => {
                this.sfa.show = false
                this.$refs.sfa.style.width = `25px`
                ipcRendererUtil.showMianWindowFunctionArea("hide")
            }
        }
    },
    curAction() {
        return {
            hover: (inOutTf) => {
                this.sfa.switchShow = inOutTf
                if (!inOutTf) {
                    this.sfaAction().hide()
                }
            }
        }
    }

}