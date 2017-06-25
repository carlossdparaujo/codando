export default class QuestionInfoModel {
  constructor(id, title) {
    this._id = id;
    this._title = title;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }
}
