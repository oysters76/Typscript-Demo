function performAction(event) {
    var _a;
    var val = document.getElementById("textbox").value;
    var liTag = document.createElement("li");
    liTag.innerHTML = val;
    (_a = document.querySelector(".list")) === null || _a === void 0 ? void 0 : _a.appendChild(liTag);
}
/* Composition in TS */
var ImageEntity = /** @class */ (function () {
    function ImageEntity(name) {
        this.name = "";
        this.name = name;
    }
    ImageEntity.prototype.resize = function (factor) { };
    ImageEntity.prototype.remap = function (factor) { };
    ImageEntity.prototype.rescale = function (factor) { };
    return ImageEntity;
}());
var BitMapImage = /** @class */ (function () {
    function BitMapImage(image) {
        this.image = image;
    }
    BitMapImage.prototype.load = function (filename) {
        throw new Error("Method not implemented.");
    };
    BitMapImage.prototype.save = function (filename) {
        throw new Error("Method not implemented.");
    };
    return BitMapImage;
}());
var image = new ImageEntity("name");
image.resize(5);
image.remap(2);
image.rescale(1);
var bitMap = new BitMapImage(image);
bitMap.save("test");
