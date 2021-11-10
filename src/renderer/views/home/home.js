import lodash from "lodash"
import { ipcRendererUtil } from "../../util/electron.util"

export default {
    init() {
        setInterval(this.getMonitorInfo, this.mointorTimes)
    },
    getMonitorInfo() {
        this.monitorInfo.forEach(item => {
            if (item.show && typeof item.set === "function") {
                if (item.interval) {
                    item.set(item)
                } else if (item.timesInterval) {
                    // mointor执行为1秒1次 item.timesInterval为多少秒 例如 2为2秒执行一次
                    if (this.mointorTotal % item.timesInterval == 0) {
                        item.set(item)
                    }
                }
            }
        })
        this.mointorTotal++
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