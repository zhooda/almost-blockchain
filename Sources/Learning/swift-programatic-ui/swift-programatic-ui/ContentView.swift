//
//  ContentView.swift
//  swift-programatic-ui
//
//  Created by Zeeshan Hooda on 6/4/19.
//  Copyright © 2019 Deceptive Labs. All rights reserved.
//

import SwiftUI

struct ContentView : View {
    var body: some View {
        VStack {
            MapView()
                .edgesIgnoringSafeArea(.top)
                .frame(height: 300)
            
            CircleImage()
                .offset(y: -130)
                .padding(.bottom, -130)
            
            VStack(alignment: .leading) {
                Text("Title")
                    .font(.title)
                HStack {
                    Text("sub headline one")
                        .font(.subheadline)
                    Spacer()
                    Text("Shtwo")
                        .font(.subheadline)
                }
            }
            .padding()
            
            Spacer()
        }
    }
}

#if DEBUG
struct ContentView_Previews : PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
#endif
