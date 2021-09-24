


export class outItem {
    constructor(id, delay, mainTag) {
        this.$container = document.querySelector(`.${id}`)
        this.$id = id
        this.$delay = delay
        this.$tag = mainTag
        this.$container.addEventListener("click", this.clickHandler.bind(this))
    }

    clickHandler(event) {
        if (event.target.classList.contains("content") || event.target.nodeName === "IMG") {
            this.checkInfo(event.target)
        }
    }

    getFather(node, tag) {
        if (node.classList.contains(tag)) {
            return node
        }else {
            return this.getFather(node.parentElement, tag)
        }
    }
    
    getOpacity(item) {
        item.style.opacity = 0
    }

    checkInfo(item) {
        let parent = this.getFather(item, this.$id)
        let items = []

        let parentItems = parent.querySelectorAll(".info")
        parentItems.forEach(element => {
            items.push(element)
        })

        parentItems.forEach(element => {
            if (!element.classList.contains(this.$tag)) {
                this.getFather(element, this.$tag)
            }
            if (element != item) {
                console.log(element, item)
                this.getOpacity(element)
            }
        })
    }


}