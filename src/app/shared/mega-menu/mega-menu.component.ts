import { Component } from "@angular/core";
import { MenuItem } from 'primeng/components/common/api';

@Component({
    selector:'app-mega-menu',
    templateUrl:'./mega-menu.component.html'
})

export class MegaMenuComponent{
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'TV', icon: 'fa fa-fw fa-check',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{label: 'TV 1.1',command: (event)=>{
                                console.log(event.item)
                            }},{label: 'TV 1.2'}],
                        },
                        {
                            label: 'TV 2',
                            items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                        },
                        {
                            label: 'TV 4',
                            items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                        }    
                    ]
                ],command:(event)=>{
                    console.log("Hello")
                }
            },
            {
                label: 'Sports', icon: 'fa fa-fw fa-soccer-ball-o',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                        },
                        {
                            label: 'Sports 2',
                            items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                        },

                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                        },
                        {
                            label: 'Sports 4',
                            items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                        },
                        {
                            label: 'Sports 6',
                            items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'fa fa-fw fa-child',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{label: 'Entertainment 1.1'},{label: 'Entertainment 1.2'}]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{label: 'Entertainment 2.1'},{label: 'Entertainment 2.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{label: 'Entertainment 3.1'},{label: 'Entertainment 3.2'}]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{label: 'Entertainment 4.1'},{label: 'Entertainment 4.2'}]
                        }    
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{label: 'Technology 1.1'},{label: 'Technology 1.2'}]
                        },
                        {
                            label: 'Technology 2',
                            items: [{label: 'Technology 2.1'},{label: 'Technology 2.2'}]
                        },
                        {
                            label: 'Technology 3',
                            items: [{label: 'Technology 3.1'},{label: 'Technology 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{label: 'Technology 4.1'},{label: 'Technology 4.2'}]
                        }  
                    ]
                ]
            },
            {
                label: 'Men', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: 'Men 1',
                            items: [{label: 'Men 1.1'},{label: 'Men 1.2'}]
                        },
                        {
                            label: 'Men 2',
                            items: [{label: 'Men 2.1'},{label: 'Men 2.2'}]
                        },
                        {
                            label: 'Men 3',
                            items: [{label: 'Men 3.1'},{label: 'Men 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Men 4',
                            items: [{label: 'Men 4.1'},{label: 'Men 4.2'}]
                        }  
                    ]
                ]
            },
            {
                label: 'Women', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: 'Women 1',
                            items: [{label: 'Women 1.1'},{label: 'Women 1.2'}]
                        },
                        {
                            label: 'Women 2',
                            items: [{label: 'Women 2.1'},{label: 'Women 2.2'}]
                        },
                        {
                            label: 'Women 3',
                            items: [{label: 'Women 3.1'},{label: 'Women 3.2'}]
                        }
                    ],
                    [
                        {
                            label: 'Women 4',
                            items: [{label: 'Women 4.1'},{label: 'Women 4.2'}]
                        }  
                    ]
                ]
            },
            {
                label: 'Furniture', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: ' 1',
                            items: [{label: '1.1'},{label: '1.2'}]
                        },
                        {
                            label: '2',
                            items: [{label: '2.1'},{label: '2.2'}]
                        },
                        {
                            label: '3',
                            items: [{label: '3.1'},{label: '3.2'}]
                        }
                    ],
                    [
                        {
                            label: '4',
                            items: [{label: '4.1'},{label: '4.2'}]
                        }  
                    ]
                ]
            },
            {
                label: 'Sports, Books & more', icon: 'fa fa-fw fa-gears',
                items: [
                    [
                        {
                            label: ' 1',
                            items: [{label: '1.1'},{label: '1.2'}]
                        },
                        {
                            label: '2',
                            items: [{label: '2.1'},{label: '2.2'}]
                        },
                        {
                            label: '3',
                            items: [{label: '3.1'},{label: '3.2'}]
                        }
                    ],
                    [
                        {
                            label: '4',
                            items: [{label: '4.1'},{label: '4.2'}]
                        }  
                    ]
                ]
            },
           
        ];
    }
    getMenuItemsForItem(item):MenuItem[]{
        const context = item;
        return this.items
    }
    show(item){
        console.log("hello")
        console.log(item)
    }
}
