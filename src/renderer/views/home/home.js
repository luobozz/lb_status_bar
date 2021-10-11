import lodash from "lodash"
import {ipcRendererUtil} from "../../util/electron.util"
export default {
    init() {
        setInterval(this.getMonitorInfo, this.mointorTimes)
        // ipcRendererUtil.showMianWindowFunctionArea(100)
    },
    getMonitorInfo() {
        this.monitorInfo.forEach(item => {
            if (item.show && item.interval && typeof item.get === "function") {
                item.get(item)
            }
        })
    },
    showMoreFunction(){
        console.log(123)
    }
}