//
//  BridgeManger.m
//  Motorku
//
//  Created by thukkani reddy on 06/03/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "BridgeManger.h"
#import <React/RCTLog.h>

@implementation BridgeManger

RCT_EXPORT_MODULE(myModule)

RCT_EXPORT_METHOD(simpleFunction:(NSString *) value){
  
  RCTLogInfo(@"alert data %@",value);
  
//  for (NSString* family in [UIFont familyNames])
//  {
//    RCTLogInfo(@"%@", family);
//
//    for (NSString* name in [UIFont fontNamesForFamilyName: family])
//    {
//      RCTLogInfo(@"Family name:  %@", name);
//    }
//  }
  
}

@end
