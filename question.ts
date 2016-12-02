1. 双向数据绑定
[(ngModel)]="name"   前题导入表单支持模块：import { FormsModule }   from '@angular/forms';

2. 组件间的嵌套，就是在NgModule中加载组件，然后主组件的template中加载子组件的html(selector的标签)
<div>
    <p>模板 {{arr.name}}</p>
    <ul>
        <li *ngFor="let item of source" (click)="handleClick(item.id)">{{item.id}} -- {{item.name}}</li>
    </ul>
// 加载子组件内容
    <my-list></my-list>
    <input type="text" class="form-control" [value]="arr.name" [(ngModel)]="arr.name" name="name"/>
</div>
