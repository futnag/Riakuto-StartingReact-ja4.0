{
  class Rectangle {
    readonly name = "rectangle";
    sideA: number;
    sideB: number;

    constructor(sideA: number, sideB: number) {
      this.sideA = sideA;
      this.sideB = sideB;
    }

    getArea = () => this.sideA * this.sideB;
  }

  const rect = new Rectangle(10, 20);
  console.log(rect.getArea());
}

/*
使用可能なアクセス修飾子
- public:自クラス、子クラス、インスタンスすべてからアクセス可能。アクセス修飾子を省略するとすべてのメンバーはこれになる
- protected:自クラスおよび子クラスからアクセス可能。インスタンスからはアクセス不可
- private:自クラスからのみアクセス可能。子クラスおよびインスタンスからはアクセス不可。
*/
